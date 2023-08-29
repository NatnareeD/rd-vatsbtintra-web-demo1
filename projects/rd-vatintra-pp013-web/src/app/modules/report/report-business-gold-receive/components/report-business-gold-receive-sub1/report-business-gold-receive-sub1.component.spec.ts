import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportBusinessGoldReceiveSub1Component } from './report-business-gold-receive-sub1.component';

describe('ReportBusinessGoldAreaSub1Component', () => {
  let component: ReportBusinessGoldReceiveSub1Component;
  let fixture: ComponentFixture<ReportBusinessGoldReceiveSub1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportBusinessGoldReceiveSub1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportBusinessGoldReceiveSub1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
