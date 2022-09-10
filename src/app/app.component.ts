import { Component } from '@angular/core';
import { faFacebook, faInstagram, faLinkedinIn, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEarListen, faMobileScreenButton, faPersonMilitaryToPerson, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faPhone = faPhone;
  faWhatsapp = faWhatsapp;
  faEarListen = faEarListen;
  faMobileScreenButton = faMobileScreenButton;
  faPersonMilitaryToPerson = faPersonMilitaryToPerson;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faLinkedinIn = faLinkedinIn;
  faInstagram = faInstagram;
}
