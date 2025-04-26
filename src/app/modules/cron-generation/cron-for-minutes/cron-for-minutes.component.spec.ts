import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronForMinutesComponent } from './cron-for-minutes.component';

describe('CronForMinutesComponent', () => {
  let component: CronForMinutesComponent;
  let fixture: ComponentFixture<CronForMinutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CronForMinutesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CronForMinutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
