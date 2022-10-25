import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from '@shared/components/material/dialogs/alert-dialog/alert-dialog.component';

export interface IDialogAlert {
  title?: string;
  content?: string;
  btnText?: string;
}

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    private dialog: MatDialog
  ) { }

  alert(data: IDialogAlert) {
    this.dialog.open(AlertDialogComponent, {data});
  }
}
