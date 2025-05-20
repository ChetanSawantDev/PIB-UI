import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PatientMaster } from '../patient-list/patient-list.component';
import { PatientInvestigationHistoryModel, PatientInvestigationLevel1 } from '../models/patient_investigation_details copy';
import { PatientInvestigationHistoryById, scheduelReportPayload } from '../generate-report/generate-report.component';
import { AdminSettings } from '../../admin-module/admin-settings/admin-settings.component';

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
  updatePatientInvestigation(payload: any){
    return this.http.post<string>('http://localhost:8080/patientInvestigation/updatePatientInvestigation',payload,{ responseType: 'text' as 'json' }   );
  }

  getAllPatientInvestigations(){
    return this.http.get<PatientInvestigationHistoryModel[]>('http://localhost:8080/patientInvestigation/investigationList');
  }

  getPatientInvestigationById(patientINvestigationId : string | any){
    return this.http.get<PatientInvestigationHistoryById>('http://localhost:8080/patientInvestigation/getPatientInvestigationById?patientInvestigationId='+patientINvestigationId);
  }


  scheduleReportForPrint(scheduleReportPayloa : scheduelReportPayload){
    const token = localStorage.getItem('token'); 
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    return this.http.post<string>('http://localhost:9090/scheduler/scheduleReport',scheduleReportPayloa,{headers : headers, responseType: 'text' as 'json' } );
  }

  savePatientInvestigationDetailsById(){

  }

  authenticateUser(authDetails : loginCredentials){
    return this.http.post<{accessToken:string}>('http://localhost:9090/auth/authenticateUser/login',authDetails);
  }

  getAllReportLogs(){
    return this.http.get<ReportLogMaster[]>('http://localhost:9090/reportService/allReportLogs');
  }

  getAllAdminSettings(){
    return this.http.get<AdminSettings[]>('http://localhost:8080/adminSettings/getAll');
  }
  saveAdminSettingMaster(payload: AdminSettings){
    return this.http.post<string>('http://localhost:8080/adminSettings/save',payload,{ responseType: 'text' as 'json' }   );
  }


  updateSchedulerState(jobName: string, status: 'DELETE' | 'RESUME' | 'PAUSE') {
    const token = localStorage.getItem('token'); 
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    return this.http.get('http://localhost:9090/scheduler/update', {
      params: {
        jobName: jobName,
        updateType: status
      },
      headers: headers,
      responseType: 'text' as 'json'
    });
  }

}


export interface loginCredentials{
  username : string;
  password : string;
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

export interface ReportLogMaster{
  reportName : string;
   jobKey : string;
   requestedBy : string;
   uniqueReportId : string;
   requestedAt : string;
   status : string; // PENDING / RUNNING / COMPLETED / FAILED
   errorMessage : string;
   causedBy : string;
   scheduledFor : string;
   completedAt : string;
   generatedFilePath : string;
   executionTimeMs : number;
   memoryConsumedForGeneration : number;
   schedulerStatus : string;
}