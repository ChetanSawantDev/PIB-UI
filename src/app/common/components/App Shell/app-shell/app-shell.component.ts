import { Component, Input,OnInit } from '@angular/core';
import { AppBarComponent } from "../app-bar/app-bar.component";
import { PibFormsModule } from '../../Forms Module/pib-forms.module';
import { TabsModule } from 'primeng/tabs';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CronGenerationMasterComponent } from "../../../../modules/cron-generation/cron-generation-master/cron-generation-master.component";
import { GeneratedCronsComponent } from "../../../../modules/cron-generation/generated-crons/generated-crons.component";
import { PatientListComponent } from "../../../../modules/Clinical Module/patient-list/patient-list.component";
import { MenuItem } from 'primeng/api';
import { PanelMenu } from 'primeng/panelmenu';
import { RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrl: './app-shell.component.scss',
  standalone : true,
  imports: [AppBarComponent,PanelMenu,ToastModule, PibFormsModule,RouterOutlet, TabsModule, ButtonModule, CheckboxModule, ReactiveFormsModule, CommonModule, FormsModule, CronGenerationMasterComponent, GeneratedCronsComponent, PatientListComponent]
})
export class AppShellComponent implements OnInit{
  public items?: MenuItem[];
  @Input() public sideBarVisible!:boolean;
  
  public l_tab_name : 'CREATE' | 'LIST' = 'CREATE';


  ngOnInit(): void {
    this.items = [
        {
            label: 'Clinical',
            items: [
                {
                    label: 'Patient List',
                    routerLink : '/'
                },
                {
                    label: 'Investigation List',
                    routerLink : '/investigationHistory'
                }
            ]
        },
        {
            label: 'Scheduler Settings',
            items: [
                {
                    label: 'Update Schedules',
                    routerLink : '/'
                },
            ]
        },
        {
            label: 'Report',
            routerLink : '/report'
        }
    ]
}

}

