import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReviewsService } from '../reviews.service';

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrl: './rform.component.css'
})
export class RformComponent {
  signupForm!: FormGroup;
  title = "Fashion Signup";

  constructor(private fb: FormBuilder, public service: ReviewsService) {
    this.createForm();
  }

  createForm() {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/(?=.*[a-zA-Z])(?=.*\d)/) // Pattern example: at least one letter and one number
      ]]
    });
  }

  // Optional: Method to handle form submission
  onSubmit() {
    if (this.signupForm.valid) {
      // Handle form submission, e.g., send data to server
      console.log('Form Submitted', this.signupForm.value);
      // this.service.registerApi()

      const formData = this.signupForm.value;

       // Call the service to post data
       this.service.registerApi(formData).subscribe({
        next: (response) => {
          console.log('Form Submitted', response);
          // Handle successful response here (e.g., show a success message)
        },
        error: (error) => {
          console.error('Form submission error', error);
          // Handle error response here (e.g., show an error message)
        }
      });
    } else {
      // Handle form errors
      console.log('Form is invalid');
    }
  }
}
