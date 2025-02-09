import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { pairwise, startWith } from 'rxjs';

@Component({
  selector: 'app-input-texbox-field',
  templateUrl: './input-texbox-field.component.html',
  styleUrl: './input-texbox-field.component.scss'
})
export class InputTexboxFieldComponent implements OnInit{
  @Output()
  public _getOutputValue : EventEmitter<string> =  new EventEmitter();

  public _textValueControl = new FormControl('');


  //*Props For Fields
  @Input() public _fieldLabel !: string;
  @Input() public _maxLength !: number;
  @Input() public _fieldType : 'TEXT' | 'NUMBER' | 'EMAIL' | 'CONTACT_NO' = 'NUMBER';
  @Input() public _width : string = 'auto';
  @Input() public _minLength : number = 0;
  @Input() public _isRequired : boolean = false;
  @Input() public _isDisabled : boolean = false;
  @Input() public _isVisible : boolean = true;


  //*Props For Number Field
  @Input() public _minValue : number | null = null;
  @Input() public _maxValue : number | null = null;
  @Input() public _minFractionDigit : number = 0;
  @Input() public _maxFractionDigit : number = 0;


  public _isFieldInvalid: boolean = false;
  public _localError: string = '';

  constructor(private _changeDitector : ChangeDetectorRef){
  }
  ngOnInit(): void {
    this._textValueControl.valueChanges
      .pipe(
        startWith(this._textValueControl.value),
        pairwise()
      )
      .subscribe(([previousValue, currentValue]) => {
        console.warn('Worked')
        this._validateChangesForTextField(previousValue,currentValue);
      });

      this._validateChangesForTextField('','');
  }

  _validateChangesForTextField(previousValue : string | null,currentValue: string | null){
    if(this._fieldType === 'TEXT'){
      let l_skip = false;

      if(this._isRequired && currentValue?.length === 0){
        this._isFieldInvalid = true;
        this._localError = `${this._fieldLabel } is required`;
        l_skip = true;
      }else{
        this._isFieldInvalid = false;
        this._localError = ``;
      }

      if(!l_skip){
        if(currentValue && currentValue.length < this._minLength && !l_skip){
          this._isFieldInvalid = true;
          this._localError = `${this._fieldLabel } should be minimum of ${this._minLength} characters`;
          l_skip = true;
        }else{
          this._isFieldInvalid = false;
          this._localError = ``;
        }
      }

      if(!l_skip){
        if(currentValue && currentValue.length < this._minLength && !l_skip){
          this._isFieldInvalid = true;
          this._localError = `${this._fieldLabel } should be minimum ${this._minLength} characters`;
          l_skip = true;
        }else{
          this._isFieldInvalid = false;
          this._localError = ``;
        }
      }
    }

  }

}
