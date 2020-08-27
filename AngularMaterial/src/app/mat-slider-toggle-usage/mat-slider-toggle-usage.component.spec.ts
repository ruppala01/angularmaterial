import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSliderToggleUsageComponent } from './mat-slider-toggle-usage.component';

describe('MatSliderToggleUsageComponent', () => {
  let component: MatSliderToggleUsageComponent;
  let fixture: ComponentFixture<MatSliderToggleUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatSliderToggleUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatSliderToggleUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
