import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextFieldComponent } from './input-text-field/input-text-field.component';
import { InputCheckboxFieldComponent } from './input-checkbox-field/input-checkbox-field.component';
import { InputRadioFieldComponent } from './input-radio-field/input-radio-field.component';
import { InputTexboxFieldComponent } from './input-texbox-field/input-texbox-field.component';
import { InputFileUploadComponent } from './input-file-upload/input-file-upload.component';
import { InputImageUploadComponent } from './input-image-upload/input-image-upload.component';
import { InputSelectUploadComponent } from './input-select-upload/input-select-upload.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputNumberModule } from 'primeng/inputnumber';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InputTextFieldComponent,
    InputCheckboxFieldComponent,
    InputRadioFieldComponent,
    InputTexboxFieldComponent,
    InputFileUploadComponent,
    InputImageUploadComponent,
    InputSelectUploadComponent,
    DatePickerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FloatLabelModule,
    InputTextModule,
    InputNumberModule
  ],
  exports : [
    InputTextFieldComponent,
    InputCheckboxFieldComponent,
    InputRadioFieldComponent,
    InputTexboxFieldComponent,
    InputFileUploadComponent,
    InputImageUploadComponent,
    InputSelectUploadComponent
  ]
})
export class PibFormsModule { }
