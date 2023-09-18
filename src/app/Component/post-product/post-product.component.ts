import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/Services/api.service';
import { ProductListingComponent } from '../product-listing/product-listing.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-product',
  templateUrl: './post-product.component.html',
  styleUrls: ['./post-product.component.css']
})
export class PostProductComponent {
  formgroup: FormGroup;
  constructor(private formBuilder: FormBuilder,public dialog: MatDialog, public dialogRef: MatDialogRef<PostProductComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any, private router: Router, private productListingComponent :ProductListingComponent) {
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
    this.productListingComponent.Products.push({
      Name: formcontrols['ProductName'].value,
      SubHeader:  formcontrols['ProductDescription'].value,
      HashTags: ['openSource', 'devtools', 'github'],
      TotalVotes: 0 ,
      URL: formcontrols['ProductWebsite'].value,
      Image: formcontrols['SelectedImages'].value
    })
    
    this.dialogRef.close();

     this.router.navigate(['/products'])

    // let req = {
    //   ProductName: formcontrols['ProductName'].value,
    //   ProductDesc: formcontrols['ProductDescription'].value,
    //   ProductCategory: formcontrols['ProductCategory'].value,
    //   ProductWebsite: formcontrols['ProductWebsite'].value,
    //   SelectedImages: formcontrols['SelectedImages'].value
    // }

    // this.apiservice.PostProduct(req).subscribe(data => {
    //   if(data == 200){
    //     this.dialogRef.close();
    //   }
    // });
  }
  close(value: any) {
    this.dialogRef.close(value);
  }
  onFileChange(event: any) {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const imagereader = new Image();
        imagereader.onload = () => {
          this.formgroup.controls['SelectedImages'].setValue(reader.result ? reader.result : '');
        };
        imagereader.src = URL.createObjectURL(file);
      };
    }
  }

  chooseImage() {
    document.getElementById('Phpto-imag')?.click();
  }
}
