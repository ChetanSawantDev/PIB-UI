import { Component, EventEmitter, Output } from '@angular/core';
import { Chip } from 'primeng/chip';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cron-for-hours',
  standalone: true,
  imports: [Chip,CheckboxModule, ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './cron-for-hours.component.html',
  styleUrl: './cron-for-hours.component.scss'
})
export class CronForHoursComponent {
  public l_hour_to_choose : CL_HourSelected = {}
  public l_hours : CL_HourSelection[] =  l_hours;
  @Output() public l_get_hour_selected : EventEmitter<string> = new EventEmitter();

  lFN_ChooseHour(l_type : keyof CL_HourSelected){
    if(this.l_hour_to_choose.EACH_HOUR){
      this.l_get_hour_selected.emit('*');
    }else if(this.l_hour_to_choose.HOURS_CHOOSE_FROM){
      let l_hours_selected : any = '';
      this.l_hours.forEach(l_second_mast=>{
        if(l_second_mast.l_checked){
          l_hours_selected = l_hours_selected !== '' ? ( l_hours_selected + ',' + l_second_mast.l_value) : l_second_mast.l_value;   
        }
      })
      this.l_get_hour_selected.emit(l_hours_selected);
    }
    this.lFN_ForceSingleCheck(l_type); 
  }

  lFN_ForceSingleCheck(l_type : keyof CL_HourSelected){
    if(l_type === 'EACH_HOUR' && this.l_hour_to_choose.EACH_HOUR){
      this.l_hour_to_choose.HOURS_CHOOSE_FROM = false;
    }else if(l_type === 'HOURS_CHOOSE_FROM' && this.l_hour_to_choose.HOURS_CHOOSE_FROM){
      this.l_hour_to_choose.EACH_HOUR = false;
    }else{
      this.l_hour_to_choose.EACH_HOUR = false;
      this.l_hour_to_choose.HOURS_CHOOSE_FROM =false;
      this.l_get_hour_selected.emit('');
    }
  }
}


interface CL_HourSelected{
  EACH_HOUR ?: boolean;
  EACH_HOUR_START_FROM ?: boolean;
  HOURS_CHOOSE_FROM ?: boolean;
  HOUR_RANGE ?: boolean;
}


export class CL_HourSelection{
  public l_label_name : string ="";
  public l_checked : boolean = false;
  public l_value ?: number;

  constructor(init?:Partial<CL_HourSelection>){
    Object.assign(this,init)
  }
}


let l_hours :CL_HourSelection[] = [
  {l_checked : false,l_label_name : '12 AM',l_value : 0},
  {l_checked : false,l_label_name : '1 AM',l_value : 1},
  {l_checked : false,l_label_name : '2 AM',l_value : 2},
  {l_checked : false,l_label_name : '3 AM',l_value : 3},
  {l_checked : false,l_label_name : '4 AM',l_value : 4},
  {l_checked : false,l_label_name : '5 AM',l_value : 5},
  {l_checked : false,l_label_name : '6 AM',l_value : 6},
  {l_checked : false,l_label_name : '7 AM',l_value : 7},
  {l_checked : false,l_label_name : '8 AM',l_value : 8},
  {l_checked : false,l_label_name : '9 AM',l_value : 9},
  {l_checked : false,l_label_name : '10 AM',l_value : 10},
  {l_checked : false,l_label_name : '11 AM',l_value : 11},
  {l_checked : false,l_label_name : '12 PM',l_value : 12},
  {l_checked : false,l_label_name : '1 PM',l_value : 13},
  {l_checked : false,l_label_name : '2 PM',l_value : 14},
  {l_checked : false,l_label_name : '3 PM',l_value : 15},
  {l_checked : false,l_label_name : '4 PM',l_value : 16},
  {l_checked : false,l_label_name : '5 PM',l_value : 17},
  {l_checked : false,l_label_name : '6 PM',l_value : 18},
  {l_checked : false,l_label_name : '7 PM',l_value : 19},
  {l_checked : false,l_label_name : '8 PM',l_value : 20},
  {l_checked : false,l_label_name : '9 PM',l_value : 21},
  {l_checked : false,l_label_name : '10 PM',l_value : 22},
  {l_checked : false,l_label_name : '11 PM',l_value : 23},
]