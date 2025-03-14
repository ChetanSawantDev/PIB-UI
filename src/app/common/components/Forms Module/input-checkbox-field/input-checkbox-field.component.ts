import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-checkbox-field',
  templateUrl: './input-checkbox-field.component.html',
  styleUrl: './input-checkbox-field.component.scss'
})
export class InputCheckboxFieldComponent implements OnInit{
  ngOnInit(): void {
    let validators = [];
    if(this._isRequired){
      validators.push(Validators.required);
    }
    this._checkboxControl.addValidators(validators);
    if(this._isDisabled){
      this._checkboxControl.disable();
    }
  }

  @Output() public _getOutputData : EventEmitter<boolean> = new EventEmitter(false); 
  
  @Input() public _checkboxControl : FormControl =  new FormControl('');

  @Input() public _isRequired : boolean =  false;

  @Input() public _isDisabled : boolean =  false;
  @Input() public _fieldLabel : string =  'false';

} 
