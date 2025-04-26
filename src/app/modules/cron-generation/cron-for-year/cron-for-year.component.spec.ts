import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronForYearComponent } from './cron-for-year.component';

describe('CronForYearComponent', () => {
  let component: CronForYearComponent;
  let fixture: ComponentFixture<CronForYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CronForYearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CronForYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
