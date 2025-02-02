import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-input-text-field',
  templateUrl: './input-text-field.component.html',
  styleUrl: './input-text-field.component.scss'
})
export class InputTextFieldComponent implements OnChanges{
  @Output()
  public _getOutputValue : EventEmitter<string> =  new EventEmitter();

  public _value : string | number =  '';

  @Input() public _fieldType : 'TEXT' | 'NUMBER' | 'EMAIL' | 'CONTACT_NO' = 'TEXT';
  @Input() public _minLength : number = 100;
  @Input() public _maxLength : number = 4;
  @Input() public _isRequired : number = 100;
  @Input() public _isDisabled : number = 100;
  @Input() public _isVisible : number = 100;

  constructor(private changeDitector : ChangeDetectorRef){
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.warn('On Changes Worked');
  }

  _validateChanges(value:string|number){
    
    if(this._value.toString().length > this._maxLength){
      this._value = this._value.toString().slice(0,this._maxLength);
      this.changeDitector.detectChanges();
    }
    
  }

}
