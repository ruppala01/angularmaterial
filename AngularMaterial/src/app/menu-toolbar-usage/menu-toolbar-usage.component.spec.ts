import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuToolbarUsageComponent } from './menu-toolbar-usage.component';

describe('MenuToolbarUsageComponent', () => {
  let component: MenuToolbarUsageComponent;
  let fixture: ComponentFixture<MenuToolbarUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuToolbarUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuToolbarUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
