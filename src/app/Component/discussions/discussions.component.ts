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
      CommentData: 'Who else is working on a Sunday?',
      Votes: 23,
      Replies: '19',
      timeperiod: '24 hours ago'
    }, {
      AuthorImage: '',
      AuthorName: 'Joana',
      CommentData: "What's your favourite tools from last week in Bulls product?",
      Votes: 105,
      Replies: '59',
      timeperiod: '2 days ago'
    }, {
      AuthorImage: '',
      AuthorName: 'Elon',
      CommentData: 'How do you feel about people giving answers they generated with ChatGPT?',
      Votes: 30,
      Replies: '5',
      timeperiod: '1 week ago'
    }, {
      AuthorImage: '',
      AuthorName: 'Jeff',
      CommentData: 'What are your top 3 products you use on a daily basis at work?',
      Votes: 64,
      Replies: '11',
      timeperiod: '2 hours ago'
    }, {
      AuthorImage: '',
      AuthorName: 'Mark',
      CommentData: 'What are your top 5 tools for content creation?',
      Votes: 78,
      Replies: '8',
      timeperiod: '1 mo ago'
    }, {
      AuthorImage: '',
      AuthorName: 'Tim',
      CommentData: 'What keeps you motivated?',
      Votes: 87,
      Replies: '22',
      timeperiod: '4 days ago'
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

  ClickUpvote(value : number, index : number){
    this.commentsList[index].Votes = this.commentsList[index].Votes + 1;
   }

  goToPopular() { }
  goToNew() { }
}
