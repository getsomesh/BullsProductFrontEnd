import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductContainerComponent } from './Component/product-container/product-container.component';
import { ProductListingComponent } from './Component/product-listing/product-listing.component';
import { DiscussionsComponent } from './Component/discussions/discussions.component';

const routes: Routes = [
  {
    path: "",
    component: ProductContainerComponent,
    children: [
      {
        path: "", component: ProductListingComponent
      },{
        path: "discussions", component: DiscussionsComponent
      },{
        path: "products", component: ProductListingComponent
      }
    ]
  }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
