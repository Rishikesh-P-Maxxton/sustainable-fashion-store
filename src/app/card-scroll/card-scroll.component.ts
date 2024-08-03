import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-scroll',
  templateUrl: './card-scroll.component.html',
  styleUrl: './card-scroll.component.css'
})
export class CardScrollComponent implements OnInit {
  cards1: Array<{ imageUrl: string, title: string, text: string }> = [];
  cards2: Array<{ imageUrl: string, title: string, text: string }> = [];
  ngOnInit() {
    // Example data; replace this with actual data fetching or service call
    this.cards1 = [
      { imageUrl: 'assets/men/men1.jpg', title: 'Modern Essential', text: 'An absolute essential' },
      { imageUrl: 'assets/men/men2.jpg', title: 'Nautical Breeze', text: 'Timeless elegance meets everyday comfort.' },
      { imageUrl: 'assets/men/men3.jpg', title: 'City Lights', text: 'Bold stripes for a modern, stylish look.' },
      { imageUrl: 'assets/men/men4.jpg', title: 'Timeless Plaid', text: 'A sophisticated pattern with a touch of tradition.' },
      { imageUrl: 'assets/men/men5.jpg', title: 'Evening Charcoal', text: 'Elevate your style with a sleek design.' },
      { imageUrl: 'assets/men/men6.jpg', title: 'Summer Sage', text: 'Stay cool and comfortable in a fresh, summer-ready design.' },
      { imageUrl: 'assets/men/men7.jpg', title: 'Retro Vibe', text: 'Vintage charm with a classic print.' }
    ];

    this.cards2 = [
      { imageUrl: 'assets/women/women1.jpg', title: 'Elegant Evening Dress', text: 'An elegant choice for any evening event.' },
      { imageUrl: 'assets/women/women2.jpg', title: 'Classic A-Line Dress', text: 'Timeless style and comfort in one dress.' },
      { imageUrl: 'assets/women/women3.jpg', title: 'Chic Shift Dress', text: 'A modern design for a chic, effortless look.' },
      { imageUrl: 'assets/women/women4.jpg', title: 'Sophisticated Wrap Dress', text: 'Sophistication meets comfort with this wrap dress.' },
      { imageUrl: 'assets/women/women5.jpg', title: 'Floral Midi Dress', text: 'A fresh floral print for a vibrant summer look.' }
    ];
  }
  

}
