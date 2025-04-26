import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronGenerationMasterComponent } from './cron-generation-master.component';

describe('CronGenerationMasterComponent', () => {
  let component: CronGenerationMasterComponent;
  let fixture: ComponentFixture<CronGenerationMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CronGenerationMasterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CronGenerationMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
