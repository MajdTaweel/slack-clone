import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBarSectionBaseComponent } from './app-bar-section-base.component';

describe('AppBarSectionBaseComponent', () => {
  let component: AppBarSectionBaseComponent;
  let fixture: ComponentFixture<AppBarSectionBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppBarSectionBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBarSectionBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
