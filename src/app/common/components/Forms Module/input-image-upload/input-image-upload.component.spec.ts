import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputImageUploadComponent } from './input-image-upload.component';

describe('InputImageUploadComponent', () => {
  let component: InputImageUploadComponent;
  let fixture: ComponentFixture<InputImageUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputImageUploadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputImageUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
