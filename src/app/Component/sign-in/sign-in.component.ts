import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  UserName: string = ''
  Password: string = '';
  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<SignInComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any) {

  }
  SubmitClick() { }

  close(value: any) {
    this.dialogRef.close(value);
  }
}
