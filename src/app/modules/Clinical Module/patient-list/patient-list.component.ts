
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ClinicalServiceService, InvestigationLevel1, InvestigationLevel1SelectList } from '../services/clinical-service.service';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { l_investigation_list, l_patient_master_list } from '../../../../assets/raw_data';


@Component({
  selector: 'app-patient-list',
  standalone: true,
  imports: [TableModule,CommonModule, ButtonModule,Dialog, SelectModule, FormsModule],
  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.scss'
})
export class PatientListComponent implements OnInit, AfterViewInit{
  public l_patient_master_list : PatientMaster[]=[]; 
  public l_investigation_modal = false;
  public l_selected_patient_in_modal : string = '';
  public l_investigation_list : InvestigationLevel1SelectList[] = []; 
  public l_investigation_select_list : InvestigationMasterSelectList[] = [];
  
  public l_investigation_selected ?: InvestigationMasterSelectList;

  
  constructor(public l_clinicalServiceService : ClinicalServiceService){

  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    // this.l_clinicalServiceService.getAllPatients().subscribe({
    //   next: (data) => {
    //     this.l_patient_master_list = data;
    //   },
    //   error: (err) => {
    //     console.error('Error fetching patients', err);
    //   }
    // });

    this.l_patient_master_list = l_patient_master_list;

    // this.l_clinicalServiceService.getInvestigations().subscribe({
    //   next: (data) => {
    //     this.l_investigation_list = data;
    //     console.warn(this.l_investigation_list);
    //     this.l_investigation_select_list = this.l_investigation_list.map(l_investigation_mast=>{
    //      return {code : l_investigation_mast.investigationLevelId , name : l_investigation_mast.investigationLevel1Name} 
    //     }) 
    //     console.warn(this.l_investigation_select_list, ' this.l_investigation_select_list')
    //   },
    //   error: (err) => {
    //     console.error('Error fetching patients', err);
    //   }
    // });

    this.l_investigation_list = l_investigation_list;
    this.l_investigation_select_list = this.l_investigation_list.map(l_investigation_mast=>{
      return {code : l_investigation_mast.investigationLevelId , name : l_investigation_mast.investigationLevel1Name} 
    }) 
  }


  AddInvestigationToPatient(){
    this.l_clinicalServiceService.requestInvestigation({patientId : this.l_selected_patient_in_modal, investigationLevel1Id : this.l_investigation_selected?.code}).subscribe({
      next: (data) => {
        console.warn(data);
      },
      error: (err) => {
        console.error('Error fetching patients', err);
      }
    });
    this.l_selected_patient_in_modal = '';
    this.l_investigation_selected = {code : '',name : ''};
    this.l_investigation_modal = false;
  }

  OpenInvestigationModel(patientId : string){
    this.l_investigation_modal = true;
    this.l_selected_patient_in_modal = patientId;
  }
}


export class PatientMaster {
  public patientId?: string;
  public mrn_no!: string;
  public first_name!: string;
  public middle_name?: string;
  public last_name!: string;
  public date_of_birth!: string;
  public age_in_years!: number;
  public age_in_months!: number;
  public age_in_days!: number;
  public gender!: number;
  public marital_status?: string;
  public blood_group?: string;
  public nationality?: string;
  public address?: string;
  public mobile_no?: string;
  public email_id?: string;
  public patient_status?: string;
  public patient_login?: string;
  public patient_password?: string;
  public country?: string;
  public city?: string;
  public district?: string;
  public deceased_date?: string;
  public deceased_reason?: string;

  constructor(init?: Partial<PatientMaster>) {
    Object.assign(this, init);
  }
}


interface InvestigationMasterSelectList {
  name: string | undefined;
  code: string | undefined;
}