import { DatePipe, TitleCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Movies } from '../../../core/interfaces/movies.interface';

@Component({
  selector: 'app-main-carousel',
  imports: [CarouselModule, TitleCasePipe, DatePipe, RouterLink],
  templateUrl: './main-carousel.component.html',
  styleUrl: './main-carousel.component.css',
})
export class MainCarouselComponent {
  @Input() title!: string;
  @Input() data!: Movies[];
  @Input() movieTitle!: string;
  @Input() movieGenre!: string | null;

  isDragging: boolean = false;
  customOptions: OwlOptions = {
    loop: false,
    stagePadding: 0,
    lazyLoad: true,
    margin: 10,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    // navText: ['<', '>'],

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
    sessionStorage.setItem('genre', this.movieTitle);
  }
}
