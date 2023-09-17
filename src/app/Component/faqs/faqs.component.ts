import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent {
  FAQList = [{
    category:'Posting',
    Author:'Jake',
    totalArticles: 29
  },{
    category:'Browsing',
    Author:'Jake',
    totalArticles: 15
  },{
    category:'Support',
    Author:'Jake',
    totalArticles: 54
  },{
    category:'Ship',
    Author:'Jake',
    totalArticles: 3
  },{
    category:'Meetups',
    Author:'Jake',
    totalArticles: 1
  },]
}
