import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { pairwise, startWith } from 'rxjs';

@Component({
  selector: 'app-input-texbox-field',
  templateUrl: './input-texbox-field.component.html',
  styleUrl: './input-texbox-field.component.scss'
})

export class InputTexboxFieldComponent implements OnInit{
  @Output()
  public _getOutputValue : EventEmitter<string | null> =  new EventEmitter();

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
    this._initializeFormControl();
  }

  private _initializeFormControl(): void {
    const validators = [];
    
    if (this._isRequired) {
      validators.push(Validators.required);
    }
    
    if (this._minLength) {
      validators.push(Validators.minLength(this._minLength));
    }
    
    if (this._maxLength) {
      validators.push(Validators.maxLength(this._maxLength));
    }
    
    if (this._fieldType === 'EMAIL') {
      validators.push(Validators.email);
    }
    
    this._textValueControl = new FormControl('', validators);
    
    if (this._isDisabled) {
      this._textValueControl.disable();
    }
    
    this._textValueControl.valueChanges
      .pipe(startWith(this._textValueControl.value), pairwise())
      .subscribe(([previousValue, currentValue]) => {
        this._validateInputField();
        this._getOutputValue.emit(currentValue);
      });
  }

  private _validateInputField(): void {
    if (this._textValueControl.invalid) {
      if (this._textValueControl.hasError('required')) {
        this._localError = `${this._fieldLabel} is required.`;
      } else if (this._textValueControl.hasError('minlength')) {
        this._localError = `${this._fieldLabel} must be at least ${this._minLength} characters.`;
      } else if (this._textValueControl.hasError('maxlength')) {
        this._localError = `${this._fieldLabel} cannot exceed ${this._maxLength} characters.`;
      } else if (this._textValueControl.hasError('email')) {
        this._localError = `Please enter a valid email address.`;
      }
    } else {
      this._localError = '';
    }
  }

}
