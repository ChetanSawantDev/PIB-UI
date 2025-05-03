import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PatientMaster } from '../patient-list/patient-list.component';
import { PatientInvestigationHistoryModel, PatientInvestigationLevel1 } from '../models/patient_investigation_details copy';

@Injectable({
  providedIn: 'root'
})
export class ClinicalServiceService {
  private apiUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

   getAllPatients(): Observable<PatientMaster[]> {
    return this.http.get<PatientMaster[]>('http://localhost:8080/patient/getAllPatient');
  }


  getInvestigations(){
    return this.http.get<InvestigationLevel1[]>('http://localhost:8080/investigations/getAllInvestigations');
  }

  requestInvestigation(payload: any){
    return this.http.post<string>('http://localhost:8080/patientInvestigation/request',payload);
  }

  getAllPatientInvestigations(){
    return this.http.get<PatientInvestigationHistoryModel[]>('http://localhost:8080/patientInvestigation/investigationList');
  }

  getPatientInvestigationById(patientINvestigationId : string | any){
    return this.http.get<PatientInvestigationLevel1>('http://localhost:8080/patientInvestigation/getPatientInvestigationById?patientInvestigationId='+patientINvestigationId);
  }
}



export interface InvestigationLevel3 {
  investigation_leve3_id?: string; // optional when creating
  investigation_level3_name: string;
  unit: string;
  referenceRange: string;
  type: string;
}

export interface InvestigationLevel2 {
  investigation_leve2_id?: string;
  investigation_level2_name: string;
  unit: string;
  referenceRange: string;
  type: string;
  investigation_level3: InvestigationLevel3[]; // Nested list
}

export interface InvestigationLevel1 {
  investigationLevelId?: string;
  investigationLevel1Name: string;
  unit: string;
  referenceRange: string;
  type: string;
  investigation_level2: InvestigationLevel2[]; // Nested list
}

export interface InvestigationLevel1SelectList {
  investigationLevelId?: string;
  investigationLevel1Name: string;
  unit: string;
  referenceRange: string;
  type: string;
}