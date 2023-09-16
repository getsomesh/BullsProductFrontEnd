import { Component } from '@angular/core';

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
}
