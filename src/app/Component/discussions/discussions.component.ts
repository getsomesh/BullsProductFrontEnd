import { Component } from '@angular/core';
import { PostDiscussionComponent } from '../post-discussion/post-discussion.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-discussions',
  templateUrl: './discussions.component.html',
  styleUrls: ['./discussions.component.css']
})
export class DiscussionsComponent {
  constructor(public dialog: MatDialog) { }
  gotoNewDiscussion() {
    const dialogRef = this.dialog.open(PostDiscussionComponent, {
      width: '40%',
      height: 'auto',
    });
    dialogRef.afterClosed().subscribe((res:any) => {

    });
  }
}
