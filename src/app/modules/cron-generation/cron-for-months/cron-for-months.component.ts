import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { Chip } from 'primeng/chip';
import { RadioButton } from 'primeng/radiobutton';
import { Select } from 'primeng/select';

@Component({
  selector: 'app-cron-for-months',
  standalone: true,
  imports: [Chip, CheckboxModule,CommonModule,FormsModule,RadioButton,Select],
  templateUrl: './cron-for-months.component.html',
  styleUrl: './cron-for-months.component.scss'
})

export class CronForMonthsComponent {
  public l_months : CL_MonthsSelection[] = l_months;
  public l_month_to_choose : CL_SelectedMonths ={};
  public l_month_select_list : Month[] = l_month_select_list; 
  public l_selectedFromMonth: Month | undefined;
  public l_selectedToMonth: Month | undefined;
  @Output() public l_get_month_selected : EventEmitter<string> = new EventEmitter();


  lFN_ChooseMonth(l_type : keyof CL_SelectedMonths){
    this.lFN_ForceSingleSelection(l_type);

    if(this.l_month_to_choose.EACH_MONTH){
      this.l_get_month_selected.emit('*');
    }else if(this.l_month_to_choose.SPECIFIC_MONTH_OF_YEAR){
      let l_month_selected : any = '';
      l_months.forEach(l_day_mast=>{
        if(l_day_mast.l_checked){
          l_month_selected = l_month_selected !== '' ? ( l_month_selected + ',' + l_day_mast.l_value) : l_day_mast.l_value;   
        }
      })
      this.l_get_month_selected.emit(l_month_selected);
    }else if(l_type === 'MONTHS_BETWEEN'){
      if(this.l_selectedFromMonth && this.l_selectedToMonth){
        this.l_get_month_selected.emit((this.l_selectedFromMonth?.code+'-'+this.l_selectedToMonth?.code))
      }
    }
  }

  lFN_ForceSingleSelection(l_type : keyof CL_SelectedMonths){
    if(l_type === 'EACH_MONTH' && this.l_month_to_choose.EACH_MONTH){
      this.l_month_to_choose.MONTHS_BETWEEN = false;
      this.l_month_to_choose.SPECIFIC_MONTH_OF_YEAR = false;
    }else if(l_type === 'SPECIFIC_MONTH_OF_YEAR' && this.l_month_to_choose.SPECIFIC_MONTH_OF_YEAR){
      this.l_month_to_choose.EACH_MONTH = false;
      this.l_month_to_choose.MONTHS_BETWEEN = false;
    }else if(l_type === 'MONTHS_BETWEEN' && this.l_month_to_choose.MONTHS_BETWEEN){
      this.l_month_to_choose.EACH_MONTH = false;
      this.l_month_to_choose.SPECIFIC_MONTH_OF_YEAR = false;
    }else{
      this.l_month_to_choose.EACH_MONTH = false;
      this.l_month_to_choose.SPECIFIC_MONTH_OF_YEAR = false;
      this.l_month_to_choose.MONTHS_BETWEEN = false;
      this.l_get_month_selected.emit('*');
      this.l_selectedFromMonth = undefined;
      this.l_selectedToMonth = undefined;
    }
  }
}














interface CL_SelectedMonths{
  EACH_MONTH ?: boolean;
  MONTHS_BETWEEN ?: boolean;
  SPECIFIC_MONTH_OF_YEAR ?: boolean;
}
export class CL_MonthsSelection{
  public l_label_name : string ="";
  public l_checked : boolean = false;
  public l_value ?: string;

  constructor(init?:Partial<CL_MonthsSelection>){
    Object.assign(this,init)
  }
}

interface Month{
  name : string;
  code : string;
}

let l_month_select_list :Month[] = [
  {name : 'January',code : 'JAN'},
  {name : 'February',code : 'FEB'},
  {name : 'March',code : 'MAR'},
  {name : 'April',code : 'APR'},
  {name : 'May',code : 'MAY'},
  {name : 'June',code : 'JUN'},
  {name : 'July',code : 'JUL'},
  {name : 'August',code : 'AUG'},
  {name : 'September',code : 'SEP'},
  {name : 'October',code : 'OCT'},
  {name : 'November',code : 'NOV'},
  {name : 'December',code : 'DEC'},
]

let l_months : CL_MonthsSelection[]= [
  {l_checked : false,l_label_name : 'January',l_value : 'JAN'},
  {l_checked : false,l_label_name : 'February',l_value : 'FEB'},
  {l_checked : false,l_label_name : 'March',l_value : 'MAR'},
  {l_checked : false,l_label_name : 'April',l_value : 'APR'},
  {l_checked : false,l_label_name : 'May',l_value : 'MAY'},
  {l_checked : false,l_label_name : 'June',l_value : 'JUN'},
  {l_checked : false,l_label_name : 'July',l_value : 'JUL'},
  {l_checked : false,l_label_name : 'August',l_value : 'AUG'},
  {l_checked : false,l_label_name : 'September',l_value : 'SEP'},
  {l_checked : false,l_label_name : 'October',l_value : 'OCT'},
  {l_checked : false,l_label_name : 'November',l_value : 'NOV'},
  {l_checked : false,l_label_name : 'December',l_value : 'DEC'},
]