import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-generated-crons',
  standalone: true,
  imports: [TableModule],
  templateUrl: './generated-crons.component.html',
  styleUrl: './generated-crons.component.scss'
})

export class GeneratedCronsComponent {
  
  public l_jobSchedulerData = [
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
      trigger_state : 'WAITING',
      priority : '5',
      start_time : '1745637832000',
      end_time : '',
      next_fire_time :'1745645461000',
      prev_fire_time : '-1'
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
      trigger_state : 'WAITING',
      priority : '5',
      start_time : '1745642731000',
      end_time : '',
      next_fire_time :'1745642821000',
      prev_fire_time : '1745642761000'
    },
    {
      sched_name :'quartzScheduler',
      job_name : 'dynamic-triggers',
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
      prev_fire_time : '-1'
    }
  ]
}
