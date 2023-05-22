import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStopwatchComponent } from './page-stopwatch.component';

describe('PageStopwatchComponent', () => {
  let component: PageStopwatchComponent;
  let fixture: ComponentFixture<PageStopwatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageStopwatchComponent]
    });
    fixture = TestBed.createComponent(PageStopwatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
