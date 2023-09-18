import { Component, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PostDiscussionComponent } from '../post-discussion/post-discussion.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class ProductListingComponent {
  Products = [{
    Name: 'Fitmint',
    SubHeader: 'Earn NFTs and crypto tokens for staying fit',
    HashTags: ['openSource', 'devtools', 'github'],
    TotalVotes: 79 ,
    URL: "https://fitmint.io/",
    Image: "../../../assets/Images/fitmint.png"
  },
  {
    Name: 'Student OS',
    SubHeader: 'Your buddy in everyday student life',
    HashTags: ['education', 'notion', 'productivity'],
    TotalVotes: 279,
    URL: "https://www.notion.so/templates/student-os",
    Image: "../../../assets/Images/studentos.jpg"
  },
  {
    Name: 'Amplitude',
    SubHeader: 'Demystify the journey to product-market fit',
    HashTags: ['tech'],
    TotalVotes: 29,
    URL: "https://amplitude.com/  ",
    Image: "../../../assets/Images/amplitude.png"
  },
  {
    Name: 'Expense Tracker',
    SubHeader: 'Say goodbye to meshy spreadsheets',
    HashTags: ['money', 'finance', 'github'],
    TotalVotes: 779,
    URL: "https://iamsourabhshen.gumroad.com/l/expense-tracker/PH100?ref=producthunt",
    Image: "../../../assets/Images/expensetracker.jpg"
  },
  {
    Name: 'ChatPal',
    SubHeader: 'Answers, Task, Information - your pal does it all',
    HashTags: ['AI', 'bots', 'android'],
    TotalVotes: 412,
    URL: "http://chatpalapp.com/",
    Image: "../../../assets/Images/chatpal.png"
  },
  {
    Name: 'Formed',
    SubHeader: 'Build better habits today',
    HashTags: ['productivity'],
    TotalVotes: 160,
    URL: "https://formed.org/",
    Image: "../../../assets/Images/formed.jpg"
  },
  {
    Name: 'Merge',
    SubHeader: 'Add hundreds of integrations to your product with one API',
    HashTags: ['api', 'saas', 'developertools'],
    TotalVotes: 79,
    URL: "https://www.merge.dev/?utm_term=&utm_campaign=Brand:+Merge&utm_source=adwords&utm_medium=ppc&hsa_acc=3079314762&hsa_cam=14005688838&hsa_grp=137899994089&hsa_ad=590894871057&hsa_src=g&hsa_tgt=dsa-1674437112124&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQjwx5qoBhDyARIsAPbMagD4gUe4RrrvBeb0jMGBE9hghkR1aLClNSM97gexmrfskR707NZjyHQaAiT-EALw_wcB",
    Image: "../../../assets/Images/Merge.jpg"
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

    constructor(public dialog: MatDialog, private apiservice: ApiService){}

    getProducts(){
      this.apiservice.GetProducts().subscribe(data => {
        if(data){
         this.Products   
        }
      });
    }

    goToProduct(selectedData: any) {
      const dialogRef = this.dialog.open(ProductDetailsComponent, {
        width: '65%',
        height: 'auto',
        data: selectedData
      });
      dialogRef.afterClosed().subscribe(res => {
  
      });
    }
   
      ClickUpvote(value : number, index : number){
        this.Products[index].TotalVotes = value + 1;     
       
    }
}
