import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallNavbarComponent } from '../../Base-Components/small-navbar/small-navbar.component';
import { ArrowIconComponent } from '../../UI-Components/arrow-icon/arrow-icon.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule , SmallNavbarComponent ,ArrowIconComponent],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

}
