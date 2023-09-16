import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-post-product',
  templateUrl: './post-product.component.html',
  styleUrls: ['./post-product.component.css']
})
export class PostProductComponent {
  formgroup: FormGroup;
  constructor(private formBuilder: FormBuilder,public dialog: MatDialog, public dialogRef: MatDialogRef<PostProductComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any) {
    this.formgroup = this.formBuilder.group({
      ProductName: ['', Validators.required],
      ProductDescription: ['', Validators.required],
      ProductCategory: ['', Validators.required],
      ProductWebsite: [''],
      SelectedImages: [''],
    })
  }

  SubmitClick(){}
  close(value: any) {
    this.dialogRef.close(value);
  }
}
