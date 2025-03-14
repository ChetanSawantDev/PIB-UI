import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-radio-field',
  templateUrl: './input-radio-field.component.html',
  styleUrl: './input-radio-field.component.scss'
})
export class InputRadioFieldComponent {
  public _l_value : FormControl = new FormControl(0);

  @Input()
  public l_radioItems !: GC_RadioGroupDetail; 
  
}

export class GC_RadioModel{
  public l_fieldLabel !: string;
  public l_fieldValue !: string | number;
  constructor(init:GC_RadioModel){
    Object.assign(this,init);
  }
}

export class GC_RadioGroupDetail{
  public l_isRequired : boolean = false;
  public l_isVisible : boolean = true;
  public l_isDisabled : boolean = false;
  public l_radioFields : GC_RadioModel[] = []
  constructor(init?:Partial<GC_RadioModel>){
    Object.assign(this,init);
  }
}