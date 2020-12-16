import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBarSpacerBaseComponent } from './app-bar-spacer-base.component';

describe('AppBarSpacerBaseComponent', () => {
  let component: AppBarSpacerBaseComponent;
  let fixture: ComponentFixture<AppBarSpacerBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppBarSpacerBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBarSpacerBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
