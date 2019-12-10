import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
    animal: string;
    name: string;
  }
@Component({
    selector: 'dialog-example',
    templateUrl: 'dialog-example.html',
  })
  export class DialogExample{
  
    constructor(
      public dialogRef: MatDialogRef<DialogExample>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
  }