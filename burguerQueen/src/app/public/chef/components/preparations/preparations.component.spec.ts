import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparationsComponent } from './preparations.component';

describe('PreparationsComponent', () => {
  let component: PreparationsComponent;
  let fixture: ComponentFixture<PreparationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreparationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
