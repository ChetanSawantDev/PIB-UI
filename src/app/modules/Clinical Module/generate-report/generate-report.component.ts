import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PatientInvestigationHistoryModel } from '../models/patient_investigation_details copy';
import { PatientInvestigationHistory } from '../patient-investigation-history/patient-investigation-history.component';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-generate-report',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './generate-report.component.html',
  styleUrl: './generate-report.component.scss'
})
export class GenerateReportComponent implements OnChanges{
  @Input() patientInvestigationDetails?: PatientInvestigationHistory;


  ngOnChanges(changes: SimpleChanges): void {
    console.warn('Changes detected:', this.patientInvestigationDetails?.doctorEmail);
  }

}
