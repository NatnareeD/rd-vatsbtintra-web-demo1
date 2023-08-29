import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportBusinessNotificationAreaSub2Component } from './report-business-notification-area-sub2.component';

describe('ReportBusinessNotificationAreaSub2Component', () => {
  let component: ReportBusinessNotificationAreaSub2Component;
  let fixture: ComponentFixture<ReportBusinessNotificationAreaSub2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportBusinessNotificationAreaSub2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportBusinessNotificationAreaSub2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
