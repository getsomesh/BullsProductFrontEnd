import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  formgroup: FormGroup;
  constructor(private formBuilder: FormBuilder, public dialog: MatDialog, public dialogRef: MatDialogRef<SignUpComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any, private  apiservice: ApiService) {
    this.formgroup = this.formBuilder.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Email: ['', Validators.required],
      Password: ['', Validators.required],
      ConfirmPassword: ['', Validators.required],
    })
  }

  SubmitClick() {
    if (this.formgroup.invalid) {
      return
    }

    const formcontrols = this.formgroup.controls

    let req = {
      FirstName: formcontrols['FirstName'].value,
      LastName: formcontrols['LastName'].value,
      Email: formcontrols['Email'].value,
      Password: formcontrols['Password'].value
    }

    this.apiservice.SignupUser(req).subscribe(data => {
      if(data){
        
      }
    });
  }
  close(value: any) {
    this.dialogRef.close(value);
  }
}
