import { Component } from '@angular/core';
import { CommonSharedModule } from '../../../common/common-shared.module';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-report-logs',
  standalone: true,
  imports: [CommonSharedModule],
  templateUrl: './report-logs.component.html',
  styleUrl: './report-logs.component.scss'
})
export class ReportLogsComponent {
  columnsToDisplay = ['reportName', 'requestedBy','requestedAt', 'status','scheduledAt','generatedAt', 'actions'];

  public dataSource: ReportEntry[];

  constructor(private datePipe: DatePipe) {
    const rawData = [
      {
        "reportName": "Daily Sales Summary",
        "requestedBy": "alice",
        "requestedAt": "2023-10-01T08:15:00Z",
        "status": "DISPATCHED",
        "scheduledAt": "2023-10-01T08:00:00Z",
        "generatedAt": "2023-10-01T08:17:23Z",
        "process_time": 1043
      },
      {
        "reportName": "Weekly Revenue Analysis",
        "requestedBy": "bob",
        "requestedAt": "2023-10-02T09:45:00Z",
        "status": "DISPATCHED",
        "scheduledAt": "2023-10-02T09:00:00Z",
        "generatedAt": "2023-10-02T09:52:10Z",
        "process_time": 3130
      },
      {
        "reportName": "October Inventory Summary",
        "requestedBy": "carol",
        "requestedAt": "2023-10-03T07:30:00Z",
        "status": "IN_PROGRESS",
        "scheduledAt": "2023-10-03T07:00:00Z",
        "generatedAt": null,
        "process_time": null
      },
      {
        "reportName": "Daily User Activity",
        "requestedBy": "dave",
        "requestedAt": "2023-10-04T11:20:00Z",
        "status": "REQUESTED",
        "scheduledAt": "2023-10-04T11:30:00Z",
        "generatedAt": null,
        "process_time": null
      },
      {
        "reportName": "System Health Check",
        "requestedBy": "eve",
        "requestedAt": "2023-10-05T02:05:00Z",
        "status": "FAILED",
        "scheduledAt": "2023-10-05T02:00:00Z",
        "generatedAt": "2023-10-05T02:01:12Z",
        "process_time": 72
      },
      {
        "reportName": "Quarterly Revenue Breakdown",
        "requestedBy": "frank",
        "requestedAt": "2023-10-06T14:55:00Z",
        "status": "DISPATCHED",
        "scheduledAt": "2023-10-06T14:00:00Z",
        "generatedAt": "2023-10-06T14:58:47Z",
        "process_time": 3527
      },
      {
        "reportName": "Warehouse Stock Status",
        "requestedBy": "grace",
        "requestedAt": "2023-10-07T16:10:00Z",
        "status": "DISPATCHED",
        "scheduledAt": "2023-10-07T16:00:00Z",
        "generatedAt": "2023-10-07T16:12:05Z",
        "process_time": 725
      },
      {
        "reportName": "Daily Error Log",
        "requestedBy": "heidi",
        "requestedAt": "2023-10-08T05:25:00Z",
        "status": "DISPATCHED",
        "scheduledAt": "2023-10-08T05:00:00Z",
        "generatedAt": "2023-10-08T05:27:33Z",
        "process_time": 1653
      },
      {
        "reportName": "Server Performance Metrics",
        "requestedBy": "ivan",
        "requestedAt": "2023-10-09T13:40:00Z",
        "status": "IN_PROGRESS",
        "scheduledAt": "2023-10-09T13:00:00Z",
        "generatedAt": null,
        "process_time": null
      },
      {
        "reportName": "Monthly Compliance Audit",
        "requestedBy": "judy",
        "requestedAt": "2023-10-10T10:00:00Z",
        "status": "REQUESTED",
        "scheduledAt": "2023-10-10T10:30:00Z",
        "generatedAt": null,
        "process_time": null
      },
      {
        "reportName": "Weekly Security Vulnerability Scan",
        "requestedBy": "mallory",
        "requestedAt": "2023-10-11T23:15:00Z",
        "status": "DISPATCHED",
        "scheduledAt": "2023-10-11T23:00:00Z",
        "generatedAt": "2023-10-11T23:20:55Z",
        "process_time": 1255
      },
      {
        "reportName": "Daily Backup Verification",
        "requestedBy": "oscar",
        "requestedAt": "2023-10-12T01:50:00Z",
        "status": "DISPATCHED",
        "scheduledAt": "2023-10-12T01:00:00Z",
        "generatedAt": "2023-10-12T01:52:14Z",
        "process_time": 3134
      }    
    ];

    this.dataSource = rawData.map(data => new ReportEntry(data, this.datePipe));
  }

  printReport(report: any) {
    console.log('Printing report:', report);
    // Trigger print/download here
  }
}


export class ReportEntry {
  reportName: string;
  requestedBy: string;
  requestedAt: string; // Now this will be a string in dd/MM/yy format
  status: 'REQUESTED' | 'IN_PROGRESS' | 'DISPATCHED' | 'FAILED';
  scheduledAt: string; // This will be a string in dd/MM/yy format
  generatedAt: string | null; // This will be a string in dd/MM/yy format or null
  process_time: number | null;

  constructor(data: any, private datePipe: DatePipe) {
    this.reportName = data.reportName;
    this.requestedBy = data.requestedBy;
    this.requestedAt = this.datePipe.transform(data.requestedAt, 'dd/MM/yy') || '';
    this.status = data.status;
    this.scheduledAt = this.datePipe.transform(data.scheduledAt, 'dd/MM/yy') || '';
    this.generatedAt = data.generatedAt ? this.datePipe.transform(data.generatedAt, 'dd/MM/yy') : null;
    this.process_time = data.process_time;
  }
}

