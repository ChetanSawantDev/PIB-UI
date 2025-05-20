import { Component } from '@angular/core';
import { ClinicalServiceService } from '../../Clinical Module/services/clinical-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { SnackBarService } from '../../Clinical Module/services/snackbar.service';

@Component({
  selector: 'app-admin-settings',
  standalone: true,
  imports: [CalendarModule,FormsModule,CommonModule,InputTextModule,FloatLabelModule,ButtonModule],
  templateUrl: './admin-settings.component.html',
  styleUrl: './admin-settings.component.scss'
})
export class AdminSettingsComponent {
  public l_admin_setting_master : AdminSettings = new AdminSettings();

  constructor(private l_clinicalService: ClinicalServiceService,private snackBarService: SnackBarService) {
    this.lFN_GetSettingsMaster();
  }


  lFN_SaveAdminSettingMaster() {
    // Convert date-time fields to long before saving
    const adminSettingToSave : AdminSettings = new AdminSettings( {
      ...this.l_admin_setting_master,
      warningScheduleFrom: new Date(this.l_admin_setting_master.warningScheduleFrom).getTime(),
      warningScheduleTo: new Date(this.l_admin_setting_master.warningScheduleTo).getTime(),
      validScheduleFrom: new Date(this.l_admin_setting_master.validScheduleFrom).getTime(),
      validScheduleTo: new Date(this.l_admin_setting_master.validScheduleTo).getTime(),
      invalidScheduleFrom: new Date(this.l_admin_setting_master.invalidScheduleFrom).getTime(),
      invalidScheduleTo: new Date(this.l_admin_setting_master.invalidScheduleTo).getTime()
    });

    this.l_clinicalService.saveAdminSettingMaster(adminSettingToSave).subscribe((data: any) => {
      if(data){
        this.snackBarService.showSuccess('Admin Settings Saved Successfully!');
      }
      this.lFN_GetSettingsMaster();
    });
  }

  lFN_GetSettingsMaster() {
    this.l_clinicalService.getAllAdminSettings().subscribe((data: any) => {
      const setting = data[0];
  
      this.l_admin_setting_master = new AdminSettings({
        warningScheduleFrom: new Date(setting.warningScheduleFrom),
        warningScheduleTo: new Date(setting.warningScheduleTo),
        validScheduleFrom: new Date(setting.validScheduleFrom),
        validScheduleTo: new Date(setting.validScheduleTo),
        invalidScheduleFrom: new Date(setting.invalidScheduleFrom),
        invalidScheduleTo: new Date(setting.invalidScheduleTo),
        marginTop: setting.marginTop,
        marginBottom: setting.marginBottom,
        marginLeft: setting.marginLeft,
        marginRight: setting.marginRight,
      });
    });
  }

  checkCronTime(cronTime: number): string {
    const { warningScheduleFrom, warningScheduleTo, validScheduleFrom, validScheduleTo, invalidScheduleFrom, invalidScheduleTo } = this.l_admin_setting_master;

    if (cronTime >= new Date(invalidScheduleFrom).getTime() && cronTime <= new Date(invalidScheduleTo).getTime()) {
      return 'Invalid Time';
    } else if (cronTime >= new Date(warningScheduleFrom).getTime() && cronTime <= new Date(warningScheduleTo).getTime()) {
      return 'Warning Time';
    } else if (cronTime >= new Date(validScheduleFrom).getTime() && cronTime <= new Date(validScheduleTo).getTime()) {
      return 'Valid Time';
    } else {
      return 'Out of Range';
    }
  }
}


export class AdminSettings {
  public adminSettingID !: Date | number;
  public warningScheduleFrom!: Date | number;
  public warningScheduleTo!: Date | number;
  public validScheduleTo!:Date | number;
  public validScheduleFrom!:Date | number;
  public invalidScheduleTo!: Date | number;
  public invalidScheduleFrom!: Date | number;

  public marginTop !: string;
  public marginBottom !: string;
  public marginLeft !: string;
  public marginRight !: string;

  constructor(init?:Partial<AdminSettings>){
    Object.assign(this, init);
  }
}
