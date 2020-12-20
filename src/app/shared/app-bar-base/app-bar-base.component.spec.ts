import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBarBaseComponent } from './app-bar-base.component';

describe('AppBarBaseComponent', () => {
  let component: AppBarBaseComponent;
  let fixture: ComponentFixture<AppBarBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppBarBaseComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBarBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
