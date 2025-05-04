import { Component, EventEmitter, Output } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PibFormsModule } from '../../../common/components/Forms Module/pib-forms.module';
import { ButtonModule } from 'primeng/button';
import { CronForMinutesComponent } from '../cron-for-minutes/cron-for-minutes.component';
import { CronForHoursComponent } from '../cron-for-hours/cron-for-hours.component';
import { CL_RespDaySelection, CronForDaysComponent } from '../cron-for-days/cron-for-days.component';
import { CronForMonthsComponent } from '../cron-for-months/cron-for-months.component';
import { CronForYearComponent } from '../cron-for-year/cron-for-year.component';
import { MatButtonModule } from '@angular/material/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-cron-generation-master',
  standalone: true,
  imports: [TabsModule,CheckboxModule,
  ReactiveFormsModule,ReactiveFormsModule,CommonModule,FormsModule, InputTextModule,PibFormsModule,ButtonModule, MatButtonModule,CronForDaysComponent,CronForHoursComponent,CronForMinutesComponent,CronForMonthsComponent,CronForYearComponent],
  templateUrl: './cron-generation-master.component.html',
  styleUrl: './cron-generation-master.component.scss'
})
export class CronGenerationMasterComponent {
  
  public l_generatedCronExpression : string = ''; 
  public l_report_name !: string; 
  public l_get_minutes : string = '';
  public l_get_hours : string = '';
  public l_get_days : CL_RespDaySelection = {l_days : '',l_days_of_week : false};
  public l_get_months : string = '';
  public l_get_years : string = '';
  public l_cron_description : string = '';
  @Output() public l_get_cron_expression : EventEmitter<string> = new EventEmitter<string>();
  constructor() {
    
  }

  lFN_PrepareCronExpressoion(){

    let currentDate = new Date();

    let l_todays_date = currentDate.getDate();
    let l_current_month = currentDate.getMonth() + 1; // Months are zero-based in JavaScript
    let l_current_year = currentDate.getFullYear();

    let l_cron_expression_array = [];

    // Seconds
    l_cron_expression_array[0] = '0';

    // Minutes
    l_cron_expression_array[1] = this.l_get_minutes || '0';

    // Hours
    l_cron_expression_array[2] = this.l_get_hours || '0';

    // Month
    l_cron_expression_array[4] = this.l_get_months || l_current_month.toString();

    // Day of Month & Day of Week
    if (this.l_get_days.l_days_of_week && this.l_get_days.l_days) {
      // If both are present, prefer DayOfWeek and set DayOfMonth to '?'
      l_cron_expression_array[3] = '?';
      l_cron_expression_array[5] = this.l_get_days.l_days;
    } else if (this.l_get_days.l_days_of_week) {
      // If only DayOfWeek is intended to be used
      l_cron_expression_array[3] = '?';
      l_cron_expression_array[5] = this.l_get_days.l_days || '*';
    } else if (this.l_get_days.l_days) {
      // If only DayOfMonth is present
      l_cron_expression_array[3] = this.l_get_days.l_days;
      l_cron_expression_array[5] = '?';
    } else {
      // If neither is present, default safely
      l_cron_expression_array[3] = l_todays_date.toString();
      l_cron_expression_array[5] = '?';
    }

    // Year (optional)
    if (this.l_get_years) {
      l_cron_expression_array[6] = this.l_get_years;
    }else{
      l_cron_expression_array[6] = l_current_year.toString();
    }

    let l_expression = l_cron_expression_array.join(' ');

    this.l_cron_description = this.parseCronExpression(l_expression); 
  }

  setCronExpression(){
    this.l_get_cron_expression.emit(this.l_cron_description);
  }


  parseCronExpression(cronExpression: string): string {
    const [seconds, minutes, hours, dayOfMonth, month, dayOfWeek, year] = cronExpression.split(' ');

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const daysOfWeek = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];

    let description = "";

    // Time
    const formattedHours = hours === '*' ? 'every hour' : (hours === '0' ? '12' : (parseInt(hours) < 12 ? hours : `${parseInt(hours) - 12}`));
    const formattedMinutes = minutes === '0' ? '00' : minutes;
    const formattedSeconds = seconds === '0' ? '00' : seconds;
    const period = hours === '*' ? '' : (hours === '0' || parseInt(hours) < 12 ? 'AM' : 'PM');
    description += `at ${formattedHours}:${formattedMinutes === '*' ? 'every minute' : formattedMinutes}:${formattedSeconds === '*' ? 'every second' : formattedSeconds}${period ? ' ' + period : ''}`;

    // Day of Month
    if (dayOfMonth === '?') {
        description += ` on `;
    } else if (dayOfMonth === '*') {
        description += ` every day `;
    } else {
        description += ` on ${dayOfMonth}th `;
    }

    // Month
    if (month === '*') {
        description += `of every month `;
    } else {
        description += `of ${months[parseInt(month) - 1]} `;
    }

    // Day of Week
    if (dayOfWeek !== '?' && dayOfWeek !== '*') {
        description += `on ${daysOfWeek[parseInt(dayOfWeek)]} `;
    }

    // Year
    if (year && year !== '*') {
        description += ` ${year}`;
    } else {
        description += `every year`;
    }

    return description.trim();
  }
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