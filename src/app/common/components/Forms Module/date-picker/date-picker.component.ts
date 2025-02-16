import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { pairwise, startWith } from 'rxjs';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss'
})
export class DatePickerComponent implements OnInit{
  ngOnInit(): void {
    this.initializeDateControl();
  }

  @Output()
  public _getOutputDate : EventEmitter<(string|null)[]> = new EventEmitter();

  @Input() public _dateValue : FormControl = new FormControl('');

  @Input() public _timeValue : FormControl = new FormControl('');

  @Input() public _isTimeField : boolean = true;
  @Input() public _timeFormat : '12' | '24' = '12';

  @Input() public _fieldLabel : string = '';

  @Input() public _selectionMode : 'single' | 'multiple' | 'range' | undefined = undefined;

  @Input() public _minDate : Date | null = null;

  @Input() public _maxDate : Date | null= null;

  @Input() public _isRequired : boolean = false; 
  @Input() public _isDisabled : boolean = false; 
  @Input() public _isVisible : boolean = false; 


  private initializeDateControl(): void {
    const validators = [];

    if (this._isRequired) {
      validators.push(Validators.required);
    }

    this._dateValue = new FormControl('', validators);

    if (this._isDisabled) {
      this._dateValue.disable();
    }

    this._dateValue.valueChanges
      .pipe(startWith(this._dateValue.value), pairwise())
      .subscribe(([prev, current]) => {
        this._getOutputDate.emit(current);
      });
  }

}
