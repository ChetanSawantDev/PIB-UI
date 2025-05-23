import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { PatientInvestigationHistoryModel, PatientInvestigationLevel1 } from '../models/patient_investigation_details copy';
import { TableModule } from 'primeng/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DialogModule } from 'primeng/dialog';
import { GenerateReportComponent } from "../generate-report/generate-report.component";
import { ClinicalServiceService } from '../services/clinical-service.service';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { SnackBarService } from '../services/snackbar.service';

@Component({
  selector: 'app-patient-investigation-history',
  standalone: true,
  imports: [TableModule, MatIconModule, MatButtonModule, DialogModule, GenerateReportComponent,CommonModule],
  templateUrl: './patient-investigation-history.component.html',
  styleUrl: './patient-investigation-history.component.scss'
})
export class PatientInvestigationHistoryComponent implements AfterViewInit{
  public l_patient_investigation_history :PatientInvestigationHistoryModel[]= [];
  public patient_investigation_history: PatientInvestigationHistory[] =[];
  public l_investigation_modal_visible = false;
  public l_patient_investigation_for_generate : PatientInvestigationHistory = new PatientInvestigationHistory();

  public l_report_status : 'Draft' | 'Finalize' = 'Draft';

  @ViewChild('report_generate_component') l_report_generate_component!: GenerateReportComponent;

  constructor(public l_clinicalServiceService : ClinicalServiceService,private messageService: MessageService,private snackBarService: SnackBarService) { }


  async ngAfterViewInit(): Promise<void> {
    this.l_report_status = 'Draft';
    await this.getAllPatientInvestigationHistory();
    
  }

  FillReportData(patientInvestigationDet : PatientInvestigationHistory){
    setTimeout(() => {
      this.l_patient_investigation_for_generate = new PatientInvestigationHistory({ ...patientInvestigationDet });
      this.l_investigation_modal_visible = true;
    });
  }

  printLaterReport(){
    this.l_report_generate_component.openCronSetupDialogue();
  }
  
  async finalizeReport(){
    await this.l_report_generate_component.savePatientInvestigationDetailsWithResults();
    setTimeout(async() => {await this.getAllPatientInvestigationHistory(),700})
  }
  printReport(){
    
  }

  closeModalOnUpdate(){
    this.l_investigation_modal_visible = false;
  }

  async getAllPatientInvestigationHistory(){
    console.log('Fetching patients...');
    this.l_clinicalServiceService.getAllPatientInvestigations().subscribe({
      next: (data) => {
        this.l_patient_investigation_history = data;

        this.l_patient_investigation_history.forEach((item) => {
          let l_patient_details = item?.patientDetails;
          (Array.isArray(item.patientInvestigationDetails) ? item.patientInvestigationDetails : [item.patientInvestigationDetails])?.forEach((investigationDetail: PatientInvestigationLevel1) => {
            this.patient_investigation_history.push(new PatientInvestigationHistory({
              patientName:l_patient_details?.first_name + ' '+ l_patient_details?.middle_name+' '+ l_patient_details?.last_name,
              patientMrn:l_patient_details?.mrn_no,
              patientAge:l_patient_details?.age_in_years,
              investigationName : investigationDetail.investigation.investigationLevel1Name,
              patientGender : l_patient_details?.gender ? 'M' : 'F',
              investigationDate : '25-Jan-2025',
              status : investigationDetail.status,
              patientContact : l_patient_details?.mobile_no,
              patientEmail : l_patient_details?.email_id,
              patientCity : l_patient_details?.city,
              comments : investigationDetail.comments,
              bloodGroup : l_patient_details?.blood_group,
              patientInvestigationLevel1Id : investigationDetail.patientInvestigationLevel1Id,
            }));
            
          });
        });
      },
      error: (err) => {
        console.error('Error fetching patients', err);
      }
    })
  }

  lFN_ScheduleSaved(isScheduled : boolean){
    if(isScheduled){
      this.snackBarService.showSuccess('Report Scheduled Successfully!');
      this.l_investigation_modal_visible = false;
    }
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Report Scheduled Successfully !' });
  }
}


export class PatientInvestigationHistory {
  patientName?: string;
  patientMrn?: string;
  patientAge?: number;
  patientGender?: string;
  patientContact?: string;
  patientEmail?: string;
  patientAddress?: string;
  patientCity?: string;
  patientState?: string;
  patientCountry?: string;
  patientZip?: string;
  patientPhone?: string;
  investigationName?: string;
  investigationDate?: string;
  result?: string;
  status?: string;
  comments?: string;
  doctorName?: string;
  doctorContact?: string;
  doctorEmail?: string;
  bloodGroup?: string;
  patientInvestigationLevel1Id ?: string;

  constructor(init?:Partial<PatientInvestigationHistory>) {
    Object.assign(this, init);
  }
}