import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatProgressBarUsageComponent } from './mat-progress-bar-usage.component';

describe('MatProgressBarUsageComponent', () => {
  let component: MatProgressBarUsageComponent;
  let fixture: ComponentFixture<MatProgressBarUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatProgressBarUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatProgressBarUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
