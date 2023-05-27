import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageClockComponent } from './page-clock.component';

describe('PageClockComponent', () => {
  let component: PageClockComponent;
  let fixture: ComponentFixture<PageClockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageClockComponent]
    });
    fixture = TestBed.createComponent(PageClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
