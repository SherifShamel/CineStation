import { Component, Input } from '@angular/core';
import { Series } from '../../../core/interfaces/series.interface';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';
import { DatePipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-series-carousel',
  imports: [CarouselModule, TitleCasePipe, DatePipe],
  templateUrl: './series-carousel.component.html',
  styleUrl: './series-carousel.component.css',
})
export class SeriesCarouselComponent {
  @Input() title!: string;
  @Input() data!: Series[];
  @Input() seriesTitle!: string;

  customOptions: OwlOptions = {
    loop: false,
    stagePadding: 0,
    margin: 10,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 5,
      },
    },
    // nav: true,
  };
}
