import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-element1',
  templateUrl: './contact-element1.component.html',
  styleUrl: './contact-element1.component.css'
})
export class ContactElement1Component {
makemail() {
  const email = 'r.puri@maxxton.com'; // Replace with your email address
    window.location.href = `mailto:${email}`;

}
  makeCall() {
    const phoneNumber = '9082951131'; // Replace with the desired phone number
    window.location.href = `tel:${phoneNumber}`;
  }
}
