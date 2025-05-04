import { Component } from '@angular/core';
import { CommonSharedModule } from '../../common/common-shared.module';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-report-schedules',
  standalone: true,
  imports: [CommonSharedModule],
  templateUrl: './report-schedules.component.html',
  styleUrl: './report-schedules.component.scss',
  providers:[DatePipe]
})
export class ReportSchedulesComponent {

}
