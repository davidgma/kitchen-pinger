import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSettingsTimerComponent } from './page-settings-timer.component';

describe('PageSettingsTimerComponent', () => {
  let component: PageSettingsTimerComponent;
  let fixture: ComponentFixture<PageSettingsTimerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageSettingsTimerComponent]
    });
    fixture = TestBed.createComponent(PageSettingsTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
