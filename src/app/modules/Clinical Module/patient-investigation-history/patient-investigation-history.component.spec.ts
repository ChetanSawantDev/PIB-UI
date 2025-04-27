import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientInvestigationHistoryComponent } from './patient-investigation-history.component';

describe('PatientInvestigationHistoryComponent', () => {
  let component: PatientInvestigationHistoryComponent;
  let fixture: ComponentFixture<PatientInvestigationHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientInvestigationHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientInvestigationHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
