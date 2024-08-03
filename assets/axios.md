## Axios in angular

```
ng add axios
```
`reviews.service.ts`
```typescript
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  getReviews() {
    return axios.get('https://dummyjson.com/c/8ae1-a3b9-4e58-9ff3');
  }
}
```

`reviews-table.component.ts`
```typescript
import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../reviews.service'; // Adjust path if needed

@Component({
  selector: 'app-reviews-table',
  templateUrl: './reviews-table.component.html',
  styleUrls: ['./reviews-table.component.css']
})
export class ReviewsTableComponent implements OnInit {
  reviews: any[] = [];

  constructor(private reviewsService: ReviewsService) {}

  ngOnInit() {
    this.reviewsService.getReviews().then(response => {
      this.reviews = response.data;
    });
  }
}

```
`reviews-table.component.html`
```html

<h1 class="d-flex justify-content-center mt-3 mb-5 text-white bg-black ms-5 me-5 p-3 rounded text-center">
  Reviews
</h1>

<div class="container">
  <table class="table table-striped table-hover table-bordered">
    <thead>
      <tr>
        <th>Name</th>
        <th>Review</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let review of reviews">
        <td>{{ review.name }}</td>
        <td>{{ review.review }}</td>
      </tr>
    </tbody>
  </table>
</div>

```
`app.module.ts`
Ensure you import HttpClientModule even though we are not using it directly in this simple example.
```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { HttpClientModule } from '@angular/common/http'; // This is depricated 
import { provideHttpClient } from '@angular/common/http'; //use this instead
import { AppComponent } from './app.component';
import { ReviewsTableComponent } from './reviews-table/reviews-table.component'; // Our element

@NgModule({
  declarations: [
    AppComponent,
    ReviewsTableComponent
  ],
  imports: [
    BrowserModule,
    //HttpClientModule // used to be here
  ],
  providers: [provideHttpClient()], //use here as function
  bootstrap: [AppComponent]
})
export class AppModule { }
```
