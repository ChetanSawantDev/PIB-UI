import { Component, OnInit } from '@angular/core';
import { PatientInvestigationDetails } from '../models/patient_investigation_details copy';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-patient-investigation-history',
  standalone: true,
  imports: [TableModule],
  templateUrl: './patient-investigation-history.component.html',
  styleUrl: './patient-investigation-history.component.scss'
})
export class PatientInvestigationHistoryComponent implements OnInit {
  public l_patient_investigation_history = PatientInvestigationDetails;
  public patientInvestigationSummary: any[] = [];

  ngOnInit(): void {
    this.patientInvestigationSummary = this.l_patient_investigation_history.map((entry) => {
      return {
        patientName: `${entry.patientDetails.first_name} ${entry.patientDetails.middle_name} ${entry.patientDetails.last_name}`.trim(),
        mrn: entry.patientDetails.mrn_no,
        contact: entry.patientDetails.mobile_no,
        testName: entry.patientInvestigationDetails.investigation.investigationLevel1Name,
      };
    });
  }
}
