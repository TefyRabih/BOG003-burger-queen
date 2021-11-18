import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabContentBtnComponent } from './tab-content-btn.component';

describe('TabContentBtnComponent', () => {
  let component: TabContentBtnComponent;
  let fixture: ComponentFixture<TabContentBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabContentBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabContentBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
