import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaiterOkComponent } from './waiter-ok.component';

describe('WaiterOkComponent', () => {
  let component: WaiterOkComponent;
  let fixture: ComponentFixture<WaiterOkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaiterOkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaiterOkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
