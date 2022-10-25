import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IDialogAlert } from '@core/services/dialog.service';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss']
})
export class AlertDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IDialogAlert
  ) { }

  ngOnInit(): void {
  }

  get title() { return this.data?.title || "Info"; }
  get content() { return this.data?.content || ""; }
  get btnText() { return this.data?.btnText || "OK"; }

}
