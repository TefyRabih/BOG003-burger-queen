import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNavTabComponent } from './menu-nav-tab.component';

describe('MenuNavTabComponent', () => {
  let component: MenuNavTabComponent;
  let fixture: ComponentFixture<MenuNavTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuNavTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuNavTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
