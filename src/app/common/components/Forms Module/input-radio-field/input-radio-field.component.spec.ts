import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputRadioFieldComponent } from './input-radio-field.component';

describe('InputRadioFieldComponent', () => {
  let component: InputRadioFieldComponent;
  let fixture: ComponentFixture<InputRadioFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputRadioFieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputRadioFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
