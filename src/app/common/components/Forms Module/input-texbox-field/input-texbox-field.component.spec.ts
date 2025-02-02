import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTexboxFieldComponent } from './input-texbox-field.component';

describe('InputTexboxFieldComponent', () => {
  let component: InputTexboxFieldComponent;
  let fixture: ComponentFixture<InputTexboxFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputTexboxFieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputTexboxFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
