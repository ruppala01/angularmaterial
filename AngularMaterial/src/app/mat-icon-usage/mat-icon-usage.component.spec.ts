import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatIconUsageComponent } from './mat-icon-usage.component';

describe('MatIconUsageComponent', () => {
  let component: MatIconUsageComponent;
  let fixture: ComponentFixture<MatIconUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatIconUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatIconUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
