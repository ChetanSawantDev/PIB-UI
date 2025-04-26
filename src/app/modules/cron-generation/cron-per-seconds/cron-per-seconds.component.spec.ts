import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronPerSecondsComponent } from './cron-per-seconds.component';

describe('CronPerSecondsComponent', () => {
  let component: CronPerSecondsComponent;
  let fixture: ComponentFixture<CronPerSecondsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CronPerSecondsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CronPerSecondsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
