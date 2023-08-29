import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportBusinessNotificationAreaSub1Component } from './report-business-notification-area-sub1.component';

describe('ReportBusinessGoldAreaSub1Component', () => {
  let component: ReportBusinessNotificationAreaSub1Component;
  let fixture: ComponentFixture<ReportBusinessNotificationAreaSub1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportBusinessNotificationAreaSub1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportBusinessNotificationAreaSub1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
