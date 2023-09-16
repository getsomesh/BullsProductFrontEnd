import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductContainerComponent } from './Component/product-container/product-container.component';
import { HeaderSectionComponent } from './Component/header-section/header-section.component';
import { ProductListingComponent } from './Component/product-listing/product-listing.component';
import { SignInComponent } from './Component/sign-in/sign-in.component';
import { SignUpComponent } from './Component/sign-up/sign-up.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { DiscussionsComponent } from './Component/discussions/discussions.component';
import { PostProductComponent } from './Component/post-product/post-product.component';
import { PostDiscussionComponent } from './Component/post-discussion/post-discussion.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductContainerComponent,
    HeaderSectionComponent,
    ProductListingComponent,
    SignInComponent,
    SignUpComponent,
    DiscussionsComponent,
    PostProductComponent,
    PostDiscussionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CommonModule,
    MaterialModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
