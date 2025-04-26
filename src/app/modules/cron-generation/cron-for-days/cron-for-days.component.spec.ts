import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronForDaysComponent } from './cron-for-days.component';

describe('CronForDaysComponent', () => {
  let component: CronForDaysComponent;
  let fixture: ComponentFixture<CronForDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CronForDaysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CronForDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
