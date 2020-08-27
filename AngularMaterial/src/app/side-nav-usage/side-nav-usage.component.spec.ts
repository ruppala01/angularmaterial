import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavUsageComponent } from './side-nav-usage.component';

describe('SideNavUsageComponent', () => {
  let component: SideNavUsageComponent;
  let fixture: ComponentFixture<SideNavUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
