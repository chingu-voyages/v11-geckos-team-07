import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownCurrencyComponent } from './dropdown-currency.component';

describe('DropdownCurrencyComponent', () => {
  let component: DropdownCurrencyComponent;
  let fixture: ComponentFixture<DropdownCurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownCurrencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
