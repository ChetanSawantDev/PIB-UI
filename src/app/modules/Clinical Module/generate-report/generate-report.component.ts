import { AfterViewInit, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PatientInvestigationHistoryModel, PatientInvestigationLevel1 } from '../models/patient_investigation_details copy';
import { PatientInvestigationHistory } from '../patient-investigation-history/patient-investigation-history.component';
import { JsonPipe } from '@angular/common';
import { ClinicalServiceService } from '../services/clinical-service.service';

@Component({
  selector: 'app-generate-report',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './generate-report.component.html',
  styleUrl: './generate-report.component.scss'
})
export class GenerateReportComponent implements OnChanges, AfterViewInit{
  @Input() patientInvestigationDetails?: PatientInvestigationHistory;

  public l_patient_invsetigation_details_by_id ?: PatientInvestigationLevel1;
  constructor(public l_clinicalServiceService : ClinicalServiceService) { }


  ngAfterViewInit(): void {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes?.['patientInvestigationDetails']){
      this.getPatientInvestigationDetailsById(changes?.['patientInvestigationDetails']?.currentValue?.patientInvestigationLevel1Id);

    }
    console.warn('Changes detected:', changes);
  }

  getPatientInvestigationDetailsById(patientInvestigationLevel1Id: string | any){
    this.l_clinicalServiceService.getPatientInvestigationById(this?.patientInvestigationDetails?.patientInvestigationLevel1Id).subscribe({
      next: (data) => {
        this.l_patient_invsetigation_details_by_id = data;
      },
      error: (err) => {
        console.error('Error fetching patients', err);
      }
    });
  }


  
}
