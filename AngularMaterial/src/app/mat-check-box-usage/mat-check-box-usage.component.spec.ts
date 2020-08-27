import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCheckBoxUsageComponent } from './mat-check-box-usage.component';

describe('MatCheckBoxUsageComponent', () => {
  let component: MatCheckBoxUsageComponent;
  let fixture: ComponentFixture<MatCheckBoxUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatCheckBoxUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatCheckBoxUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
