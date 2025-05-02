import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClinicalHomeComponent } from './clinical-home.component';


describe('ClinicalHomeComponent', () => {
  let component: ClinicalHomeComponent;
  let fixture: ComponentFixture<ClinicalHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClinicalHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClinicalHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
