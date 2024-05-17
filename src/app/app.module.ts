import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/Pages-Components/home/home.component';
import { NavbarComponent } from './Components/Base-Components/navbar/navbar.component';
import { AboutComponent } from './Components/Pages-Components/about/about.component';
import { ServicesComponent } from './Components/Pages-Components/services/services.component';
import { PortfolioComponent } from './Components/Pages-Components/portfolio/portfolio.component';
import { ContactUsComponent } from './Components/Pages-Components/contact-us/contact-us.component';
import { FooterComponent } from './Components/Pages-Components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    RouterLink,
    RouterLinkActive,
    PortfolioComponent,
    ContactUsComponent,
    FooterComponent

    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
