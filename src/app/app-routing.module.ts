import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductContainerComponent } from './Component/product-container/product-container.component';
import { ProductListingComponent } from './Component/product-listing/product-listing.component';
import { DiscussionsComponent } from './Component/discussions/discussions.component';
import { AboutUsComponent } from './Component/about-us/about-us.component';
import { FaqsComponent } from './Component/faqs/faqs.component';

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
      },{
        path: "aboutus", component: AboutUsComponent
      },{
        path: "faqs", component: FaqsComponent
      }
    ]
  }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
