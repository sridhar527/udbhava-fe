import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentvoucherComponent } from './paymentvoucher.component';

describe('PaymentvoucherComponent', () => {
  let component: PaymentvoucherComponent;
  let fixture: ComponentFixture<PaymentvoucherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentvoucherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentvoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
