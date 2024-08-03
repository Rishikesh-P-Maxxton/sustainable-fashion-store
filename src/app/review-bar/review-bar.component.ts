import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../reviews.service';
@Component({
  selector: 'app-review-bar',
  templateUrl: './review-bar.component.html',
  styleUrl: './review-bar.component.css'
})
export class ReviewBarComponent implements OnInit{
  reviews: any[] = [];

  constructor(private reviewsService: ReviewsService) {}

  ngOnInit() {
    this.reviewsService.getReviews().then(response => {
      this.reviews = response.data;
    });
  }
}
