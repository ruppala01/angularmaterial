import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTableUsageComponent } from './mat-table-usage.component';

describe('MatTableUsageComponent', () => {
  let component: MatTableUsageComponent;
  let fixture: ComponentFixture<MatTableUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatTableUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTableUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
