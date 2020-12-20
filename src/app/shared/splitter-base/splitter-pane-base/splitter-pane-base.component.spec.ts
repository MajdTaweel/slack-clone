import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitterPaneBaseComponent } from './splitter-pane-base.component';

describe('SplitterPaneBaseComponent', () => {
  let component: SplitterPaneBaseComponent;
  let fixture: ComponentFixture<SplitterPaneBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SplitterPaneBaseComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitterPaneBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
