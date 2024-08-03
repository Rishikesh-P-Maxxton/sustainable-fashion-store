import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

import { ContactPageComponent } from './contact-page/contact-page.component';
import { FaqComponent } from './faq/faq.component';
import { ContactElement1Component } from './contact-element1/contact-element1.component';
import { CardScrollComponent } from './card-scroll/card-scroll.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },{path: 'login', component:LoginPageComponent},

  {path: 'signup', component:SignupPageComponent},

  { path: 'contact', component: ContactPageComponent,
    children:[
      { path: '', redirectTo: 'contactus', pathMatch: 'full', outlet: 'contactPage' },
      {path: 'contactus', component:ContactElement1Component, outlet:'contactPage'},
      {path: 'faq', component:FaqComponent, outlet:'contactPage'}

    ]
   },
  {path: 'shop', component:CardScrollComponent},
  {path: '404', component:NotFoundComponent},
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export { RouterModule };
