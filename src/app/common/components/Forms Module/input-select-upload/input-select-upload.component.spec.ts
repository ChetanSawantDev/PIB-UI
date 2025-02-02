import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSelectUploadComponent } from './input-select-upload.component';

describe('InputSelectUploadComponent', () => {
  let component: InputSelectUploadComponent;
  let fixture: ComponentFixture<InputSelectUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputSelectUploadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputSelectUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
