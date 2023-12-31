import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-report-business-not-transfer-sub2',
  templateUrl: './report-business-not-transfer-sub2.component.html',
  styleUrls: ['./report-business-not-transfer-sub2.component.scss']
})
export class ReportBusinessNotTransferSub2Component implements OnInit {

  constructor(private router: Router, private readonly location : Location) { }

  ngOnInit(): void { }

  setPage() {
    this.location.back();
  }

}