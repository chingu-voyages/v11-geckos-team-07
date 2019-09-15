import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealTimeRateExchangeComponent } from './real-time-rate-exchange.component';

describe('RealTimeRateExchangeComponent', () => {
  let component: RealTimeRateExchangeComponent;
  let fixture: ComponentFixture<RealTimeRateExchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealTimeRateExchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealTimeRateExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
