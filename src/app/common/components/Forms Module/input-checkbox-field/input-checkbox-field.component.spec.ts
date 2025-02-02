import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCheckboxFieldComponent } from './input-checkbox-field.component';

describe('InputCheckboxFieldComponent', () => {
  let component: InputCheckboxFieldComponent;
  let fixture: ComponentFixture<InputCheckboxFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputCheckboxFieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputCheckboxFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
