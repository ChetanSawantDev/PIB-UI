import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonSharedModule } from '../../../common/common-shared.module';
import { DatePipe } from '@angular/common';
import { ClinicalServiceService, ReportLogMaster } from '../../Clinical Module/services/clinical-service.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-report-logs',
  standalone: true,
  imports: [CommonSharedModule, MatIconModule],
  templateUrl: './report-logs.component.html',
  styleUrl: './report-logs.component.scss'
})
export class ReportLogsComponent {
  columnsToDisplay = ['reportName', 'requestedBy','requestedAt', 'status','scheduledAt','generatedAt', 'actions'];
  public tableVisible : boolean =true;
  public dataSource!: ReportLogMaster[];

  constructor(private datePipe: DatePipe, private l_clinicalServiceService: ClinicalServiceService, private cdr: ChangeDetectorRef) {
    this.getAllReportLogs();
  }

  printReport(report: any) {
    console.log('Printing report:', report);
    // Trigger print/download here
  }


  formatDateTime(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = date.toLocaleString('en-US', { month: 'short' }); // e.g., May
    const year = date.getFullYear();
  
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
  
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be 12
    const formattedHours = String(hours).padStart(2, '0');
  
    return `${day}-${month}-${year} ${formattedHours}:${minutes}:${seconds} ${ampm}`;
  }

  updateSchedulerStatus(jobName: string, status: 'DELETE' | 'RESUME' | 'PAUSE') {
    const param = encodeURIComponent(jobName);
    this.l_clinicalServiceService.updateSchedulerState(param, status).subscribe({
      next: () => {
        console.warn('getAllReportLogs shoudl have been executed')
        this.getAllReportLogs(); // ✅ Simple, direct call
      },
      error: (err) => {
        console.error('Failed to update scheduler status:', err);
      }
    });
  }

  async getAllReportLogs(){
    console.warn('Executed')
    this.tableVisible = false;
    this.l_clinicalServiceService.getAllReportLogs().subscribe({
      next: (data) => {
        this.dataSource = [...data.map((item: any) => {
          const l_report_name = item.reportName.substring(0, item.reportName.indexOf('%'));
          console.warn(item);
          const parts = item.scheduledFor?.split(/[-T:]/);
          let scheduledDateStr = '';
          if(parts?.length > 0){
            const date = new Date(
              Number(parts[0]),           // year
              Number(parts[1]) - 1,       // month (0-indexed)
              Number(parts[2]),           // day
              Number(parts[3]),           // hour
              Number(parts[4]),           // minute
              Number(parts[5])            // second
            );
            scheduledDateStr =this.formatDateTime(date)
          }
          let l_priority = 'Normal';
          if(item?.priority < 5){
            l_priority = 'Low'
          }
          if(item?.priority > 5){
            l_priority = 'High'
          }
          return {...item,l_priority : l_priority, l_report_name : l_report_name, requestedAt: this.formatDateTime(new Date(item.requestedAt)), scheduledAt: scheduledDateStr , generatedAt: item.completedAt ? this.formatDateTime(new Date(item.completedAt)): null };
        })];
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error fetching report logs:', error);
      }
    });   
  }
}



