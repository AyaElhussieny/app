import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSliderComponent } from '../../Base-Components/main-slider/main-slider.component';
import { NavbarComponent } from '../../Base-Components/navbar/navbar.component';
import { ArrowIconComponent } from '../../UI-Components/arrow-icon/arrow-icon.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,MainSliderComponent , NavbarComponent ,ArrowIconComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
