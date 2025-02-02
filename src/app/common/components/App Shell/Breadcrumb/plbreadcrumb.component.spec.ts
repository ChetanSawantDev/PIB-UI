import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PLBreadcrumbComponent } from './plbreadcrumb.component';

describe('PLBreadcrumbComponent', () => {
  let component: PLBreadcrumbComponent;
  let fixture: ComponentFixture<PLBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PLBreadcrumbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PLBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
