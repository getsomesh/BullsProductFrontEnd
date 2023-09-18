import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SignInComponent } from '../sign-in/sign-in.component';
import { PostProductComponent } from '../post-product/post-product.component';
import { PostDiscussionComponent } from '../post-discussion/post-discussion.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.css']
})
export class HeaderSectionComponent {
  SearchText = '';
  loggedIn: boolean = true;
  MenuList = [
    { key: 1, value: 'Products', Route: 'products' },
    // {
    //   key: 2, value: 'Categories', SubMenus: [
    //     { Name: 'Ad blockers' }, { Name: 'App switcher' }, { Name: 'Calendar apps' }, { Name: 'Customer support' }, { Name: 'Email clients' }, { Name: 'E-signature' }, { Name: 'File storage and sharing' }, { Name: 'Hiring software' }, { Name: 'Knowledge base software' }, { Name: 'Legal services' }, { Name: 'Meeting software' }, { Name: 'Note and writing apps' }, { Name: 'Password managers' }, { Name: 'PDF Editor' }, { Name: 'Presentation Software    ' }, { Name: 'Project management software    ' }, { Name: 'Resume tools    ' }, { Name: 'Scheduling software    ' }, { Name: 'Screenshots and screen recording apps    ' }, { Name: 'Search' }]
    // },
    { key: 3, value: 'Community', SubMenus: [{ Name: 'Discussions', Route: 'discussions' }] },
    { key: 4, value: 'Advertise' }, { key: 5, value: 'About', SubMenus: [{ Name: 'About Us', Route: 'aboutus' }] }];

  constructor(private router: Router, public dialog: MatDialog, public apiService: ApiService) { }


  applyFilter(event: KeyboardEvent) { }
  ClearText() { }
  subMenuClicked(menu: any) {
    if (menu.Route)
      this.router.navigateByUrl(menu.Route);

  }

  signin() {
    const dialogRef = this.dialog.open(SignInComponent, {
      width: '25%',
      height: 'auto',
    });
    dialogRef.afterClosed().subscribe(res => {

    });
  }

  signup() {
    const dialogRef = this.dialog.open(SignUpComponent, {
      width: '40%',
      height: 'auto',
    });
    dialogRef.afterClosed().subscribe(res => {

    });
  }

  postProduct() {
    const dialogRef = this.dialog.open(PostProductComponent, {
      width: '40%',
      height: 'auto',
    });
    dialogRef.afterClosed().subscribe(res => {

    });
  }
  postDiscussion() {
    const dialogRef = this.dialog.open(PostDiscussionComponent, {
      width: '40%',
      height: 'auto',
    });
    dialogRef.afterClosed().subscribe(res => {

    });
  }
}
