import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-post-product',
  templateUrl: './post-product.component.html',
  styleUrls: ['./post-product.component.css']
})
export class PostProductComponent {
  formgroup: FormGroup;
  constructor(private formBuilder: FormBuilder,public dialog: MatDialog, public dialogRef: MatDialogRef<PostProductComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any, private  apiservice: ApiService) {
    this.formgroup = this.formBuilder.group({
      ProductName: ['', Validators.required],
      ProductDescription: ['', Validators.required],
      ProductCategory: ['', Validators.required],
      ProductWebsite: [''],
      SelectedImages: [''],
    })
  }

  SubmitClick(){
    if (this.formgroup.invalid) {
      return
    }

    const formcontrols = this.formgroup.controls

    let req = {
      ProductName: formcontrols['ProductName'].value,
      ProductDesc: formcontrols['ProductDescription'].value,
      ProductCategory: formcontrols['ProductCategory'].value,
      ProductWebsite: formcontrols['ProductWebsite'].value,
      SelectedImages: formcontrols['SelectedImages'].value
    }

    this.apiservice.PostProduct(req).subscribe(data => {
      if(data == 200){
        this.dialogRef.close();
      }
    });
  }
  close(value: any) {
    this.dialogRef.close(value);
  }
}
