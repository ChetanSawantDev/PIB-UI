import { Routes } from '@angular/router';
import { UserSignInComponent } from './common/components/Authentication/sign-in/user-sign-in.component';
import { NotFoundComponent } from './common/components/Authentication/not-found/not-found.component';
import { PatientListComponent } from './modules/Clinical Module/patient-list/patient-list.component';
import { PatientInvestigationHistoryComponent } from './modules/Clinical Module/patient-investigation-history/patient-investigation-history.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { GenerateReportComponent } from './modules/Clinical Module/generate-report/generate-report.component';
import { ClinicalHomeComponent } from './modules/Clinical Module/clinical-home.component';
import { AdminModuleComponent } from './modules/admin-module/admin-module.component';
import { ReportSchedulesComponent } from './modules/Report-schedules/report-schedules.component';
import { ReportLogsComponent } from './modules/Report-schedules/report-logs/report-logs.component';


export const routes: Routes = [
    // {
    //     path: "",
    //     component: AppComponent,
    //     children: [
    //         {
    //             path: "", component: AppShellComponent,
    //             children: [
    //                 {
    //                     path: "", component: PatientListComponent,
    //                 },
    //                 {
    //                     path: "investigationHistory", component: PatientInvestigationHistoryComponent,
    //                 },
    //                 {
    //                     path : 'report',component : GenerateReportComponent
    //                 }
    //             ]
    //         },
    //         { path: "login", component: UserSignInComponent },

    //     ]
    // },
    { path: '', component: UserSignInComponent },
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
        ],
    },
    {
      path: 'clinical',
      component: ClinicalHomeComponent,
      children: [
        {path : '', component : PatientListComponent},
        {path : 'patient-investigation-history', component : PatientInvestigationHistoryComponent},
        {path : 'generate-report', component : GenerateReportComponent},
      ]
    },
    { path: 'admin',
      component: AdminModuleComponent,
      children: []
    },
    {
      path: 'schedules',
      component: ReportSchedulesComponent,
      children: [
        {path : '', component : ReportLogsComponent},
        //{path : 'reportlogs', component : ReportLogsComponent},
      ],
    },
    {
      path: 'generate-report/:patientInvestigationLevel1Id',
      component: GenerateReportComponent,
    },
    { path: '**', component: NotFoundComponent }
];
