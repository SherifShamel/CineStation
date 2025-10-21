import { DatePipe, TitleCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Series } from '../../../core/interfaces/series.interface';

@Component({
  selector: 'app-series-carousel',
  imports: [CarouselModule, TitleCasePipe, DatePipe, RouterLink],
  templateUrl: './series-carousel.component.html',
  styleUrl: './series-carousel.component.css',
})
export class SeriesCarouselComponent {
  @Input() title!: string;
  @Input() data!: Series[];
  @Input() seriesTitle!: string;
  @Input() seriesGenre!: string | null;

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

  saveGenre() {
    sessionStorage.setItem('genre', this.seriesTitle);
  }
}
