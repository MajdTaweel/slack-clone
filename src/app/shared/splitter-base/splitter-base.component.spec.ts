import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitterBaseComponent } from './splitter-base.component';

describe('SplitterBaseComponent', () => {
  let component: SplitterBaseComponent;
  let fixture: ComponentFixture<SplitterBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SplitterBaseComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitterBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
