import { Component } from '@angular/core';
import { HerosectionComponent } from "./component/herosection/herosection.component";
import { NewsectionComponent } from "./component/newsection/newsection/newsection.component";

@Component({
  selector: 'app-home',
  imports: [HerosectionComponent, NewsectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
