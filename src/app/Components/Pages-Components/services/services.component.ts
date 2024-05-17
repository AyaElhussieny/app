import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ArrowBlackIconComponent } from '../../UI-Components/arrow-black-icon/arrow-black-icon.component';
import { ArrowIconComponent } from '../../UI-Components/arrow-icon/arrow-icon.component';


@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule,ArrowBlackIconComponent,ArrowIconComponent ,RouterModule ,BrowserAnimationsModule , CarouselModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {


    customOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      dots: false,
      navSpeed: 700,
      navText: ['', ''],
      responsive: {
        0: {
          items: 1
        }
      },
        nav: true
    
    }}
