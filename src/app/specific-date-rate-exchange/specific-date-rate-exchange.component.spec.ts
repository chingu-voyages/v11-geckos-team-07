import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificDateRateExchangeComponent } from './specific-date-rate-exchange.component';

describe('SpecificDateRateExchangeComponent', () => {
  let component: SpecificDateRateExchangeComponent;
  let fixture: ComponentFixture<SpecificDateRateExchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificDateRateExchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificDateRateExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
