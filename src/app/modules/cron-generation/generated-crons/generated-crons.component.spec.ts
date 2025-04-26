import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratedCronsComponent } from './generated-crons.component';

describe('GeneratedCronsComponent', () => {
  let component: GeneratedCronsComponent;
  let fixture: ComponentFixture<GeneratedCronsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneratedCronsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneratedCronsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
