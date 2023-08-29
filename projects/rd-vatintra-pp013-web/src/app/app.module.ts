import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportBusinessNotTransferSub2Component } from './modules/report/report-business-not-transfer/components/report-business-not-transfer-sub2/report-business-not-transfer-sub2.component';
import { SearchReportBusinessNotTransferComponent } from './modules/report/report-business-not-transfer/components/search-report-business-not-transfer/search-report-business-not-transfer.component';
import { ReportBusinessUserRemoveSub1Component } from './modules/report/report-business-user-remove/components/report-business-user-remove-sub1/report-business-user-remove-sub1.component';
import { SharedModule } from './shared/shared.module';
import { SearchReportBusinessNotApproveComponent } from './modules/report/report-business-not-approve/components/search-report-business-not-approve/search-report-business-not-approve.component';
import { SearchReportGoldVatApproveComponent } from './modules/report/report-gold-vat-approve/components/search-report-gold-vat-approve/search-report-gold-vat-approve.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportBusinessUserRemoveSub1Component,
    ReportBusinessNotTransferSub2Component,
    SearchReportBusinessNotTransferComponent,
    SearchReportBusinessNotApproveComponent,
    SearchReportGoldVatApproveComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
