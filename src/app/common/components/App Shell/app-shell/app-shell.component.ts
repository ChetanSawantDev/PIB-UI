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


@Component({
  selector: 'app-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrl: './app-shell.component.scss',
  standalone : true,
  imports: [AppBarComponent, CronGenerationMasterComponent, PibFormsModule, TabsModule ,ButtonModule, CheckboxModule, ReactiveFormsModule, CommonModule, FormsModule, CronGenerationMasterComponent, GeneratedCronsComponent]
})
export class AppShellComponent {
  @Input() public sideBarVisible!:boolean;
  
  public l_tab_name : 'CREATE' | 'LIST' = 'CREATE';


}

