import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleMenuTreeComponent } from './module-menu-tree.component';

describe('ModuleMenuTreeComponent', () => {
  let component: ModuleMenuTreeComponent;
  let fixture: ComponentFixture<ModuleMenuTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuleMenuTreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleMenuTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
