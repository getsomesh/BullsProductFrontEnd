import { Component } from '@angular/core';
import { PostDiscussionComponent } from '../post-discussion/post-discussion.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-discussions',
  templateUrl: './discussions.component.html',
  styleUrls: ['./discussions.component.css']
})
export class DiscussionsComponent {
  commentsList = [
    {
      AuthorImage: '',
      AuthorName: 'Alex',
      CommentData: 'How do you get people to invite their friends to compete for cash prizes?',
      Votes: '230',
      Replies: '19',
      timeperiod: '8 mo ago'
    }, {
      AuthorImage: '',
      AuthorName: 'Alex',
      CommentData: 'How do you get people to invite their friends to compete for cash prizes?',
      Votes: '230',
      Replies: '19',
      timeperiod: '8 mo ago'
    }, {
      AuthorImage: '',
      AuthorName: 'Alex',
      CommentData: 'How do you get people to invite their friends to compete for cash prizes?',
      Votes: '230',
      Replies: '19',
      timeperiod: '8 mo ago'
    }, {
      AuthorImage: '',
      AuthorName: 'Alex',
      CommentData: 'How do you get people to invite their friends to compete for cash prizes?',
      Votes: '230',
      Replies: '19',
      timeperiod: '8 mo ago'
    }, {
      AuthorImage: '',
      AuthorName: 'Alex',
      CommentData: 'How do you get people to invite their friends to compete for cash prizes?',
      Votes: '230',
      Replies: '19',
      timeperiod: '8 mo ago'
    }, {
      AuthorImage: '',
      AuthorName: 'Alex',
      CommentData: 'How do you get people to invite their friends to compete for cash prizes?',
      Votes: '230',
      Replies: '19',
      timeperiod: '8 mo ago'
    }
  ];
  topics = [
    'Design', 'Ask me anything', 'Artificial Intelligence', 'Development', 'Marketing', 'Introduce Yourself', 'Launch Tips', 'Ask for Feedback'
  ];
  constructor(public dialog: MatDialog) { }
  gotoNewDiscussion() {
    const dialogRef = this.dialog.open(PostDiscussionComponent, {
      width: '40%',
      height: 'auto',
    });
    dialogRef.afterClosed().subscribe((res: any) => {

    });
  }

  goToPopular() { }
  goToNew() { }
}
