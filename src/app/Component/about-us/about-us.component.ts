import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  TeamMembers= [{
    Name:'Ryan Hoover',
    designation:'Founder',
    Photo:'../../../assets/Images/default.jpg'
  },{
    Name:'Ashley Higgins',
    designation:'CEO',
    Photo:'../../../assets/Images/default.jpg'
  },{
    Name:'John Grange',
    designation:'Engineering Lead',
    Photo:'../../../assets/Images/default.jpg'
  },{
    Name:'Richard Siwady',
    designation:'Software Engineer',
    Photo:'../../../assets/Images/default.jpg'
  },{
    Name:'Mike Ciesielka',
    designation:'Software Engineer',
    Photo:'../../../assets/Images/default.jpg'
  },{
    Name:'Emmett Storts',
    designation:'Data Science',
    Photo:'../../../assets/Images/default.jpg'
  }]
}
