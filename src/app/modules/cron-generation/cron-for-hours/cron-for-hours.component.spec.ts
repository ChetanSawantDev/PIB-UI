import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronForHoursComponent } from './cron-for-hours.component';

describe('CronForHoursComponent', () => {
  let component: CronForHoursComponent;
  let fixture: ComponentFixture<CronForHoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CronForHoursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CronForHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
