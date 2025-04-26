import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { startWith, pairwise } from 'rxjs/operators';


@Component({
  selector: 'app-input-text-field',
  templateUrl: './input-text-field.component.html',
  styleUrl: './input-text-field.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class InputTextFieldComponent implements OnInit{
  @Output() public _getOutputValue: EventEmitter<any> = new EventEmitter<any>();

  
  public _textValueControl!: FormControl; // Used for TEXT and EMAIL types
  public _numValueControl!: FormControl;  // Used for NUMBER type

  //* Props For Fields
  @Input() public _fieldLabel!: string;
  @Input() public _maxLength!: number;
  @Input() public _fieldType: 'TEXT' | 'NUMBER' | 'EMAIL' | 'CONTACT_NO' = 'NUMBER';
  @Input() public _width: string = 'auto';
  @Input() public _minLength: number = 0;
  @Input() public _isRequired: boolean = false;
  @Input() public _isDisabled: boolean = false;
  @Input() public _isVisible: boolean = true;

  //* Props For Number Field
  @Input() public _minValue: number | null = null;
  @Input() public _maxValue: number | null = null;
  @Input() public _minFractionDigit: number = 0;
  @Input() public _maxFractionDigit: number = 0;

  public _localError: string = '';
  public _isFieldInvalid: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    // Initialize controls based on field type
    if (this._fieldType === 'NUMBER') {
      this.initializeNumberControl();
    } else {
      this.initializeTextControl();
    }
  }

  private initializeTextControl(): void {
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

    this._textValueControl = new FormControl(null, validators);

    if (this._isDisabled) {
      this._textValueControl.disable();
    }
    this._textValueControl.valueChanges
      .pipe(startWith(this._textValueControl.value), pairwise())
      .subscribe(([prev, current]) => {
        this.validateTextField();
        this._getOutputValue.emit(current);
      });
  }

  private initializeNumberControl(): void {
    const validators = [];

    if (this._isRequired) {
      validators.push(Validators.required);
    }
    if (this._minValue !== null) {
      validators.push(Validators.min(this._minValue));
    }
    if (this._maxValue !== null) {
      validators.push(Validators.max(this._maxValue));
    }

    this._numValueControl = new FormControl(null, validators);

    if (this._isDisabled) {
      this._numValueControl.disable();
    }

    this._numValueControl.valueChanges
      .pipe(startWith(this._numValueControl.value), pairwise())
      .subscribe(([prev, current]) => {
        this.validateNumberField();
        this._getOutputValue.emit(current);
      });
  }

  private validateTextField(): void {
    if (this._textValueControl.invalid && (this._textValueControl.touched || this._textValueControl.dirty)) {
      this._isFieldInvalid = true;
      if (this._textValueControl.hasError('required')) {
        this._localError = `${this._fieldLabel} is required.`;
      } else if (this._textValueControl.hasError('minlength')) {
        this._localError = `${this._fieldLabel} must be at least ${this._minLength} characters.`;
      } else if (this._textValueControl.hasError('maxlength')) {
        this._localError = `${this._fieldLabel} cannot exceed ${this._maxLength} characters.`;
      } else if (this._textValueControl.hasError('email')) {
        this._localError = `Please enter a valid email address.`;
      } else {
        this._localError = `Invalid value.`;
      }
    } else {
      this._isFieldInvalid = false;
      this._localError = '';
    }
  }

  private validateNumberField(): void {
    if (this._numValueControl.invalid && (this._numValueControl.touched || this._numValueControl.dirty)) {
      this._isFieldInvalid = true;
      if (this._numValueControl.hasError('required')) {
        this._localError = `${this._fieldLabel} is required.`;
      } else if (this._numValueControl.hasError('min')) {
        this._localError = `${this._fieldLabel} must be at least ${this._minValue}.`;
      } else if (this._numValueControl.hasError('max')) {
        this._localError = `${this._fieldLabel} cannot exceed ${this._maxValue}.`;
      } else {
        this._localError = `Invalid number.`;
      }
    } else {
      this._isFieldInvalid = false;
      this._localError = '';
    }
  }
}
