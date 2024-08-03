import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, RouterModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardBigComponent } from './card-big/card-big.component';
import { CardScrollComponent } from './card-scroll/card-scroll.component';
import { Hero3SectionsComponent } from './hero3-sections/hero3-sections.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TformComponent } from './tform/tform.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { ContactElement1Component } from './contact-element1/contact-element1.component';
import { MapLinkComponent } from './map-link/map-link.component';
import { ContactNavComponent } from './contact-nav/contact-nav.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { FaqComponent } from './faq/faq.component';
import { ReviewBarComponent } from './review-bar/review-bar.component';

import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { Axios } from 'axios';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { VidBannerComponent } from './vid-banner/vid-banner.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RformComponent } from './rform/rform.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeElem2Component } from './home-elem2/home-elem2.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    CardBigComponent,
    CardScrollComponent,
    Hero3SectionsComponent,
    HomePageComponent,
    TformComponent,
    FooterComponent,
    ContactElement1Component,
    MapLinkComponent,
    ContactNavComponent,
    ContactPageComponent,
    FaqComponent,
    ReviewBarComponent,
    JumbotronComponent,
    VidBannerComponent,
    AboutPageComponent,
    LoginPageComponent,
    RformComponent,
    SignupPageComponent,
    NotFoundComponent,
    HomeElem2Component,
   
    
    
  


  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, RouterModule, HttpClientModule, ReactiveFormsModule 
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
