import { Component, EventEmitter, Output } from '@angular/core';
import { Chip } from 'primeng/chip';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RadioButton } from 'primeng/radiobutton';

@Component({
  selector: 'app-cron-per-seconds',
  standalone: true,
  imports: [Chip, CheckboxModule,CommonModule,FormsModule,RadioButton],
  templateUrl: './cron-per-seconds.component.html',
  styleUrl: './cron-per-seconds.component.scss'
})
export class CronPerSecondsComponent {
  public l_seconds : CL_SecondsSelection[] = l_seconds;
  public l_seconds_to_choose : CL_SelectedSecond = {};
  @Output() public l_get_seconds_selected : EventEmitter<string> = new EventEmitter();


  lFN_ChooseSeconds(l_type : keyof CL_SelectedSecond){
    if(this.l_seconds_to_choose.EACH_SECOND){
      this.l_get_seconds_selected.emit('*');
    }else if(this.l_seconds_to_choose.SECONDS_CHOOSE_FROM){
      let l_seconds_selected : any = '';
      l_seconds.forEach(l_second_mast=>{
        if(l_second_mast.l_checked){
          l_seconds_selected = l_seconds_selected !== '' ? ( l_seconds_selected + ',' + l_second_mast.l_value) : l_second_mast.l_value;   
        }
      })
      this.l_get_seconds_selected.emit(l_seconds_selected);
    }
    this.lFN_ForceSingleCheck(l_type);
  }
  lFN_ForceSingleCheck(l_type : keyof CL_SelectedSecond){
    if(l_type === 'EACH_SECOND' && this.l_seconds_to_choose.EACH_SECOND){
      this.l_seconds_to_choose.SECONDS_CHOOSE_FROM = false;
    }else if(l_type === 'SECONDS_CHOOSE_FROM' && this.l_seconds_to_choose.SECONDS_CHOOSE_FROM){
      this.l_seconds_to_choose.EACH_SECOND = false;
    }else{
      this.l_seconds_to_choose.EACH_SECOND = false;
      this.l_seconds_to_choose.SECONDS_CHOOSE_FROM =false;
      this.l_get_seconds_selected.emit('');
    }
  }

}















interface CL_SelectedSecond {
  EACH_SECOND ?: boolean;
  EACH_SECOND_START_FROM ?: boolean;
  SECONDS_CHOOSE_FROM ?: boolean;
  SECONDS_RANGE ?: boolean;
}

export class CL_SecondsSelection{
  public l_label_name : string ="";
  public l_checked : boolean = false;
  public l_value ?: number;

  constructor(init?:Partial<CL_SecondsSelection>){
    Object.assign(this,init)
  }
}

let l_seconds :CL_SecondsSelection[] = [
  {l_checked : false,l_label_name : '00',l_value : 0},
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
  {l_checked : false,l_label_name : '31',l_value : 31},
  {l_checked : false,l_label_name : '32',l_value : 32},
  {l_checked : false,l_label_name : '33',l_value : 33},
  {l_checked : false,l_label_name : '34',l_value : 34},
  {l_checked : false,l_label_name : '35',l_value : 35},
  {l_checked : false,l_label_name : '36',l_value : 36},
  {l_checked : false,l_label_name : '37',l_value : 37},
  {l_checked : false,l_label_name : '38',l_value : 38},
  {l_checked : false,l_label_name : '39',l_value : 39},
  {l_checked : false,l_label_name : '40',l_value : 40},
  {l_checked : false,l_label_name : '41',l_value : 41},
  {l_checked : false,l_label_name : '42',l_value : 42},
  {l_checked : false,l_label_name : '43',l_value : 43},
  {l_checked : false,l_label_name : '44',l_value : 44},
  {l_checked : false,l_label_name : '45',l_value : 45},
  {l_checked : false,l_label_name : '46',l_value : 46},
  {l_checked : false,l_label_name : '47',l_value : 47},
  {l_checked : false,l_label_name : '48',l_value : 48},
  {l_checked : false,l_label_name : '49',l_value : 49},
  {l_checked : false,l_label_name : '50',l_value : 50},
  {l_checked : false,l_label_name : '51',l_value : 51},
  {l_checked : false,l_label_name : '52',l_value : 52},
  {l_checked : false,l_label_name : '53',l_value : 53},
  {l_checked : false,l_label_name : '54',l_value : 54},
  {l_checked : false,l_label_name : '55',l_value : 55},
  {l_checked : false,l_label_name : '56',l_value : 56},
  {l_checked : false,l_label_name : '57',l_value : 57},
  {l_checked : false,l_label_name : '58',l_value : 58},
  {l_checked : false,l_label_name : '59',l_value : 59},
]