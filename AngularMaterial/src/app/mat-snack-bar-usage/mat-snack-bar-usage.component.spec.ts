import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSnackBarUsageComponent } from './mat-snack-bar-usage.component';

describe('MatSnackBarUsageComponent', () => {
  let component: MatSnackBarUsageComponent;
  let fixture: ComponentFixture<MatSnackBarUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatSnackBarUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatSnackBarUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
