import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PostDiscussionComponent } from '../post-discussion/post-discussion.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent {
  Products = [{
    Name: 'DevHunt',
    SubHeader: 'Open source Product Hunt for dev tools',
    HashTags: ['openSource', 'devtools', 'github'],
    TotalVotes: 79
  }]

  TopStories = [
    {
      Story: 'Web2 vs. Web3: Navigating the future of the internet',
      Image: '../../../assets/Images/Image001.avif',
      TimePeriod: '6 min'
    },
    {
      Story: 'How to ask ChatGPT for resume help',
      Image: '../../../assets/Images/Image002.avif',
      TimePeriod: '13 min'
    },
    {
      Story: '6 best code editors for Mac in 2023',
      Image: '../../../assets/Images/Image003.avif',
      TimePeriod: '7 min'
    }
  ];
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
    }];

    constructor(public dialog: MatDialog){}

    goToProduct(selectedData: any) {
      const dialogRef = this.dialog.open(ProductDetailsComponent, {
        width: '65%',
        height: 'auto',
        data: selectedData
      });
      dialogRef.afterClosed().subscribe(res => {
  
      });
    }
}
