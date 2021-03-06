import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

/**
 * @title Injecting data when opening a dialog
 */
@Component({
  selector: 'app-dialog-component',
  templateUrl: 'dialog.component.html',
})
export class DialogComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(value) {
    console.log(value);
    if (value !== 'panda' || value !== 'unicorn') {
      value = 'lion';
    }
    console.log(value);
    this.dialog.open(DialogModal, {
      data: {
        animal: value
      }
    });
  }
}

@Component({
  selector: 'dialog-modal',
  templateUrl: 'dialog-modal.html',
})
export class DialogModal {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
