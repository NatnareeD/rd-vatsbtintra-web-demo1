import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportBusinessGoldReceiveSub2Component } from './report-business-gold-receive-sub2.component';

describe('ReportBusinessGoldReceiveSub2Component', () => {
  let component: ReportBusinessGoldReceiveSub2Component;
  let fixture: ComponentFixture<ReportBusinessGoldReceiveSub2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportBusinessGoldReceiveSub2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportBusinessGoldReceiveSub2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
