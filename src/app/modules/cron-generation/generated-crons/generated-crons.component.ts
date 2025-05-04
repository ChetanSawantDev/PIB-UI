import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Select } from 'primeng/select';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SplitButton } from 'primeng/splitbutton';
import { MenuItem, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-generated-crons',
  standalone: true,
  imports: [TableModule,Select, CommonModule, FormsModule,SplitButton,ToastModule],
  templateUrl: './generated-crons.component.html',
  styleUrl: './generated-crons.component.scss',
  providers : [MessageService]
})

export class GeneratedCronsComponent {


  constructor(private messageService: MessageService){

  }

  public l_jobSchedulerData : JobSchedulerData[] = [
    {
      sched_name :'quartzScheduler',
      job_name : 'reportPerHour',
      job_group : 'dynamic-jobs',
      job_description : '',
      job_class_name : '',
      is_durable : 'TRUE',
      is_nonconcurrent : 'FALSE',
      is_update_data : 'FALSE',
      requests_recovery : 'FALSE',
      job_data : '',
      trigger_name : 'reportPerHour_trigger',
      trigger_group : 'dynamic-triggers',
      trigger_state : 'PAUSE',
      priority : '5',
      start_time : '1745637832000',
      end_time : '',
      next_fire_time :'1745645461000',
      prev_fire_time : '-1',
      l_action_buttons : [
        {
          label : 'Pause',
          command: () =>{
            this.lFN_ChangeSatusOfJob('reportPerHour','PAUSE');
          }
        },
        {
          label : 'Resume',
          command: () =>{
            this.lFN_ChangeSatusOfJob('reportPerHour','RESUME');
          }
        },
        {
          label : 'Delete',
          command: () =>{
            this.lFN_ChangeSatusOfJob('reportPerHour','DELETE');
          }
        }
      ]
    },
    {
      sched_name :'quartzScheduler',
      job_name : 'report',
      job_group : 'dynamic-jobs',
      job_description : '',
      job_class_name : '',
      is_durable : 'TRUE',
      is_nonconcurrent : 'FALSE',
      is_update_data : 'FALSE',
      requests_recovery : 'FALSE',
      job_data : '',
      trigger_name : 'report_trigger',
      trigger_group : 'dynamic-triggers',
      trigger_state : 'DELETE',
      priority : '5',
      start_time : '1745642731000',
      end_time : '',
      next_fire_time :'1745642821000',
      prev_fire_time : '1745642761000',
      l_action_buttons : [
        {
          label : 'Pause',
          command: () =>{
            this.lFN_ChangeSatusOfJob('report','PAUSE');
          }
        },
        {
          label : 'Resume',
          command: () =>{
            this.lFN_ChangeSatusOfJob('report','RESUME');
          }
        },
        {
          label : 'Delete',
          command: () =>{
            this.lFN_ChangeSatusOfJob('report','DELETE');
          }
        }
      ]
    },
    {
      sched_name :'quartzScheduler',
      job_name : 'Report Per Minute',
      job_group : 'dynamic-jobs',
      job_description : '',
      job_class_name : '',
      is_durable : 'TRUE',
      is_nonconcurrent : 'FALSE',
      is_update_data : 'FALSE',
      requests_recovery : 'FALSE',
      job_data : '',
      trigger_name : 'dynamic-triggers_trigger',
      trigger_group : 'dynamic-triggers',
      trigger_state : 'WAITING',
      priority : '5',
      start_time : '1745642764000',
      end_time : '',
      next_fire_time :'1745695861000',
      prev_fire_time : '-1',
      l_action_buttons : [
        {
          label : 'Pause',
          command: () =>{
            this.lFN_ChangeSatusOfJob('Report Per Minute','PAUSE');
          }
        },
        {
          label : 'Resume',
          command: () =>{
            this.lFN_ChangeSatusOfJob('Report Per Minute','RESUME');
          }
        },
        {
          label : 'Delete',
          command: () =>{
            this.lFN_ChangeSatusOfJob('Report Per Minute','DELETE');
          }
        }
      ]
    }
  ]


  public l_trigger_states : Trigger_State[] = [
    {code : 'RESUME', name : 'Resume'},
    {code : 'PAUSE', name : 'Pause'},
    {code : 'DELETE', name : 'Delete'},
    {code : 'WAITING', name : 'Active'}
  ]




  //? Call API To Change Status Of Job
  lFN_ChangeSatusOfJob(jobName:string, jobSatus : 'RESUME' | 'PAUSE' | 'DELETE'){
    this.messageService.add({ severity: 'success', summary: 'Success', detail:(jobName + "'s status updated !" ), closable : false });
  }


  save(){
    
  }
}



interface Trigger_State {
  name: string;
  code: string;
}

interface JobSchedulerData{
  
    sched_name : string;
    job_name : string;
    job_group :string;
    job_description : string;
    job_class_name : string;
    is_durable : string;
    is_nonconcurrent : string;
    is_update_data : string;
    requests_recovery : string;
    job_data : string;
    trigger_name : string;
    trigger_group : string;
    trigger_state : string;
    priority : string;
    start_time : string;
    end_time : string;
    next_fire_time :string;
    prev_fire_time : string;
    l_action_buttons : MenuItem[]
  
}