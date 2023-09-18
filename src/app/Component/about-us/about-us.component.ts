import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  TeamMembers= [{
    Name:'Somesh Rajasekar',
    designation:'Founder',
    Photo:'../../../assets/Images/default.jpg'
  },{
    Name:'Yoginya Iyer',
    designation:'Co-Founder',
    Photo:'../../../assets/Images/default.jpg'
  },{
    Name:'Prasad Ugale',
    designation:'Co-Founder',
    Photo:'../../../assets/Images/default.jpg'
  },{
    Name:'Yashwnth Chittibabu',
    designation:'Co-Founder',
    Photo:'../../../assets/Images/default.jpg'
  },{
    Name:'Sonali Sharma',
    designation:'Co-Founder',
    Photo:'../../../assets/Images/default.jpg'
  },]
}
