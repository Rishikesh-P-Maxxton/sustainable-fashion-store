import { Component } from '@angular/core';

@Component({
  selector: 'app-home-elem2',
  templateUrl: './home-elem2.component.html',
  styleUrl: './home-elem2.component.css'
})
export class HomeElem2Component {
  items = [
    {
      image: 'assets/homeimg/he1.jpg',
      title: 'Services',
      subtitle: 'Contact Us'
    },
    {
      image: 'assets/homeimg/he2.jpg',
      title: 'Art Of Living',
      subtitle: 'Lifestyle'
    },
    {
      image: 'assets/homeimg/he3.jpg',
      title: 'Personalisation',
      subtitle: 'Explore'
    }
  ];
}
