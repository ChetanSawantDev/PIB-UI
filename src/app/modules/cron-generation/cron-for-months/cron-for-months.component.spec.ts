import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronForMonthsComponent } from './cron-for-months.component';

describe('CronForMonthsComponent', () => {
  let component: CronForMonthsComponent;
  let fixture: ComponentFixture<CronForMonthsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CronForMonthsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CronForMonthsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
