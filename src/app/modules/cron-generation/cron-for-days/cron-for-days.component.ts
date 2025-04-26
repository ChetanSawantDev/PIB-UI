import { Component, EventEmitter, Output } from '@angular/core';
import { Chip } from 'primeng/chip';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RadioButton } from 'primeng/radiobutton';


@Component({
  selector: 'app-cron-for-days',
  standalone: true,
  imports: [Chip, CheckboxModule,CommonModule,FormsModule,RadioButton],
  templateUrl: './cron-for-days.component.html',
  styleUrl: './cron-for-days.component.scss'
})
export class CronForDaysComponent {
  public l_days : CL_DaysSelection[] = l_seconds;
  public l_week_days : CL_WeekDaysSelection[] = l_week_days;
  

  public l_days_to_choose :CL_SelectedDay = {};
  @Output() public l_get_days_selected : EventEmitter<CL_RespDaySelection> = new EventEmitter();


  lFN_ChooseDays(l_type : keyof CL_SelectedDay){
    if(this.l_days_to_choose.EACH_DAY){
      this.l_get_days_selected.emit({l_days : '*',l_days_of_week : false});
    }else if(this.l_days_to_choose.SPECIFIC_DAY_OF_WEEK){
      let l_days_selected : any = '';
      l_week_days.forEach(l_day_mast=>{
        if(l_day_mast.l_checked){
          l_days_selected = l_days_selected !== '' ? ( l_days_selected + ',' + l_day_mast.l_value) : l_day_mast.l_value;   
        }
      })
      this.l_get_days_selected.emit({l_days : l_days_selected, l_days_of_week : true});
    }else if(this.l_days_to_choose.SPECIFIC_DAY_OF_MONTH){
      let l_days_selected : any = '';
      this.l_days.forEach(l_day_mast=>{
        if(l_day_mast.l_checked){
          l_days_selected = l_days_selected !== '' ? ( l_days_selected + ',' + l_day_mast.l_value) : l_day_mast.l_value;   
        }
      })
      this.l_get_days_selected.emit({l_days : l_days_selected,l_days_of_week : false});
    }else if(this.l_days_to_choose.LAST_DAY_OF_MONTH){
      this.l_get_days_selected.emit({l_days :'L',l_days_of_week : false});
    }
    this.lFN_ForceSingleSelection(l_type);
  }

  lFN_ForceSingleSelection(l_type : keyof CL_SelectedDay){
    if(l_type === 'EACH_DAY' && this.l_days_to_choose.EACH_DAY){
      this.l_days_to_choose.LAST_DAY_OF_MONTH = false;
      this.l_days_to_choose.SPECIFIC_DAY_OF_MONTH = false;
      this.l_days_to_choose.SPECIFIC_DAY_OF_WEEK = false;
    }else if(l_type === 'SPECIFIC_DAY_OF_WEEK' && this.l_days_to_choose.SPECIFIC_DAY_OF_WEEK){
      this.l_days_to_choose.EACH_DAY = false;
      this.l_days_to_choose.LAST_DAY_OF_MONTH = false;
      this.l_days_to_choose.SPECIFIC_DAY_OF_MONTH = false;
    }else if(l_type === 'SPECIFIC_DAY_OF_MONTH' && this.l_days_to_choose.SPECIFIC_DAY_OF_MONTH){
      this.l_days_to_choose.EACH_DAY = false;
      this.l_days_to_choose.LAST_DAY_OF_MONTH = false;
      this.l_days_to_choose.SPECIFIC_DAY_OF_WEEK = false;
    }else if(l_type === 'LAST_DAY_OF_MONTH' && this.l_days_to_choose.LAST_DAY_OF_MONTH){
      this.l_days_to_choose.EACH_DAY = false;
      this.l_days_to_choose.SPECIFIC_DAY_OF_MONTH = false;
      this.l_days_to_choose.SPECIFIC_DAY_OF_WEEK = false;
    }else{
      this.l_days_to_choose.EACH_DAY = false;
      this.l_days_to_choose.LAST_DAY_OF_MONTH = false;
      this.l_days_to_choose.SPECIFIC_DAY_OF_MONTH = false;
      this.l_days_to_choose.SPECIFIC_DAY_OF_WEEK = false;
    }
  }
}



interface CL_SelectedDay{
  EACH_DAY ?: boolean;
  SPECIFIC_DAY_OF_WEEK ?: boolean;
  SPECIFIC_DAY_OF_MONTH ?: boolean; 
  LAST_DAY_OF_MONTH ?: boolean;
}


export interface CL_RespDaySelection{
  l_days : string;
  l_days_of_week : boolean;
}




export class CL_DaysSelection{
  public l_label_name : string ="";
  public l_checked : boolean = false;
  public l_value ?: number;

  constructor(init?:Partial<CL_DaysSelection>){
    Object.assign(this,init)
  }
}
export class CL_WeekDaysSelection{
  public l_label_name : string ="";
  public l_checked : boolean = false;
  public l_value ?: string;

  constructor(init?:Partial<CL_DaysSelection>){
    Object.assign(this,init)
  }
}
let l_week_days : CL_WeekDaysSelection[] = [
  {l_checked : false,l_label_name : 'Sunday',l_value : 'SUN'},
  {l_checked : false,l_label_name : 'Monday',l_value : 'MON'},
  {l_checked : false,l_label_name : 'Tuesday',l_value : 'TUE'},
  {l_checked : false,l_label_name : 'Wednesday',l_value : 'WED'},
  {l_checked : false,l_label_name : 'Thursday',l_value : 'THU'},
  {l_checked : false,l_label_name : 'Friday',l_value : 'FRI'},
  {l_checked : false,l_label_name : 'Saturday',l_value : 'SAT'}
]

let l_seconds :CL_DaysSelection[] = [
  {l_checked : false,l_label_name : '01',l_value : 1},
  {l_checked : false,l_label_name : '02',l_value : 2},
  {l_checked : false,l_label_name : '03',l_value : 3},
  {l_checked : false,l_label_name : '04',l_value : 4},
  {l_checked : false,l_label_name : '05',l_value : 5},
  {l_checked : false,l_label_name : '06',l_value : 6},
  {l_checked : false,l_label_name : '07',l_value : 7},
  {l_checked : false,l_label_name : '08',l_value : 8},
  {l_checked : false,l_label_name : '09',l_value : 9},
  {l_checked : false,l_label_name : '10',l_value : 10},
  {l_checked : false,l_label_name : '11',l_value : 11},
  {l_checked : false,l_label_name : '12',l_value : 12},
  {l_checked : false,l_label_name : '13',l_value : 13},
  {l_checked : false,l_label_name : '14',l_value : 14},
  {l_checked : false,l_label_name : '15',l_value : 15},
  {l_checked : false,l_label_name : '16',l_value : 16},
  {l_checked : false,l_label_name : '17',l_value : 17},
  {l_checked : false,l_label_name : '18',l_value : 18},
  {l_checked : false,l_label_name : '19',l_value : 19},
  {l_checked : false,l_label_name : '20',l_value : 20},
  {l_checked : false,l_label_name : '21',l_value : 21},
  {l_checked : false,l_label_name : '22',l_value : 22},
  {l_checked : false,l_label_name : '23',l_value : 23},
  {l_checked : false,l_label_name : '24',l_value : 24},
  {l_checked : false,l_label_name : '25',l_value : 25},
  {l_checked : false,l_label_name : '26',l_value : 26},
  {l_checked : false,l_label_name : '27',l_value : 27},
  {l_checked : false,l_label_name : '28',l_value : 28},
  {l_checked : false,l_label_name : '29',l_value : 29},
  {l_checked : false,l_label_name : '30',l_value : 30},
  {l_checked : false,l_label_name : '31',l_value : 31}
]
