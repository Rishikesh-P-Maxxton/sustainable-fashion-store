import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewBarComponent } from './review-bar.component';

describe('ReviewBarComponent', () => {
  let component: ReviewBarComponent;
  let fixture: ComponentFixture<ReviewBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReviewBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
