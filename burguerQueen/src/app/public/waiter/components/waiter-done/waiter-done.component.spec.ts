import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaiterDoneComponent } from './waiter-done.component';

describe('WaiterDoneComponent', () => {
  let component: WaiterDoneComponent;
  let fixture: ComponentFixture<WaiterDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaiterDoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaiterDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
