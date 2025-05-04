import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { PatientInvestigationLevel1 } from '../models/patient_investigation_details copy';
import { PatientInvestigationHistory } from '../patient-investigation-history/patient-investigation-history.component';
import { CommonModule, JsonPipe } from '@angular/common';
import { ClinicalServiceService } from '../services/clinical-service.service';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
import { CronGenerationMasterComponent } from "../../cron-generation/cron-generation-master/cron-generation-master.component";
import { DialogModule } from 'primeng/dialog';
import { PatientMaster } from '../patient-list/patient-list.component';

@Component({
  selector: 'app-generate-report',
  standalone: true,
  imports: [JsonPipe, CommonModule, InputTextModule, FormsModule, TextareaModule, Toast, CronGenerationMasterComponent,DialogModule],
  templateUrl: './generate-report.component.html',
  styleUrl: './generate-report.component.scss',
  providers: [MessageService]
})
export class GenerateReportComponent implements OnChanges,OnInit{
  @Input() patientInvestigationDetails?: PatientInvestigationHistory;

  public l_patient_invsetigation_details_by_id !: PatientInvestigationLevel1;
  public l_doctor_comments !: string;
  public l_component_type : 'REPORT' | 'GENERATE' = 'GENERATE';
  public l_cron_modal_visible !: boolean;
  public l_generated_cron_expresion !: string;

  public l_patient_master !: PatientMaster;

  @Output() patientInvestigationResultsSaved: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(public l_clinicalServiceService : ClinicalServiceService,
              private route: ActivatedRoute,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.l_doctor_comments = "";
    this.l_cron_modal_visible = false;
    this.route.queryParams.subscribe(params => {
      const id = params['patientInvestigationLevel1Id'];
      if (id) {
        this.l_component_type = 'REPORT';
        this.getPatientInvestigationDetailsById(id);
      }
    });
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes?.['patientInvestigationDetails']){
      this.getPatientInvestigationDetailsById(changes?.['patientInvestigationDetails']?.currentValue?.patientInvestigationLevel1Id);
    }
  }

  getPatientInvestigationDetailsById(patientInvestigationLevel1Id: string | any){
    this.l_clinicalServiceService.getPatientInvestigationById(patientInvestigationLevel1Id).subscribe({
      next: (data) => {
        let l_patient_investigation_details : PatientInvestigationHistoryById = data;
        this.l_patient_invsetigation_details_by_id = l_patient_investigation_details.patientInvestigationDetails;
        this.l_patient_master = l_patient_investigation_details.patientDetails;
      },
      error: (err) => {
        console.error('Error fetching patients', err);
      }
    });
  }

  async savePatientInvestigationDetailsWithResults(){
    this.l_patient_invsetigation_details_by_id.comments = this.l_doctor_comments;
    this.l_patient_invsetigation_details_by_id.status = 'FINALIZED';
    this.l_clinicalServiceService.updatePatientInvestigation(this.l_patient_invsetigation_details_by_id).subscribe({
      next: (data) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: data });
        this.patientInvestigationResultsSaved.emit(false);
      },
      error: (err) => {
        console.error('Error fetching patients', err);
      }
    });
  }
  
  async printReportForPatientInvestigation(){
    console.warn(window.location.href, ' window.location.href');
  }

  openCronSetupDialogue(){
    this.l_cron_modal_visible = true;
  }
  async scheduleReportForReportPrint(){

    let l_payload : scheduelReportPayload = {
      parameters:{ patientInvestigationLevel1Id: this.l_patient_invsetigation_details_by_id.patientInvestigationLevel1Id},
      cronExpression: this.l_generated_cron_expresion,
      requestedBy: 'Admin',
      requestedDate: new Date().toString(),
      webPageUrl : 'http://localhost:4200/clinical/generate-report?patientInvestigationLevel1Id='+this.l_patient_invsetigation_details_by_id.patientInvestigationLevel1Id,
    };

    this.l_clinicalServiceService.scheduleReportForPrint(l_payload).subscribe({
      next: (data) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: data });
        this.l_cron_modal_visible = false;
      },
      error: (err) => {
        console.error('Error fetching patients', err);
      }
    });

    console.warn(l_payload, 'l_payload');
  }
}


export interface scheduelReportPayload{
  parameters: {patientInvestigationLevel1Id : string};
  cronExpression: string;
  requestedBy: string;
  requestedDate: string;
  webPageUrl : string;
}

export interface PatientInvestigationHistoryById {
  patientInvestigationDetails : PatientInvestigationLevel1;
  patientDetails : PatientMaster;
}