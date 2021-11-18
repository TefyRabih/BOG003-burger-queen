import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTabContentComponent } from './menu-tab-content.component';

describe('MenuTabContentComponent', () => {
  let component: MenuTabContentComponent;
  let fixture: ComponentFixture<MenuTabContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuTabContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTabContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
