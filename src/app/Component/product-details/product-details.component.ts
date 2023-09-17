import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  ProductData: any;
  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<ProductDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any, public apiService: ApiService){

      this.ProductData = this.dialogData;
    }


    close(value: any) {
      this.dialogRef.close(value);
    }
}
