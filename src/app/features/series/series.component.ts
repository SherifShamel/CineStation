import { Component, inject, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { forkJoin } from 'rxjs';
import { Series } from '../../core/interfaces/series.interface';
import { SeriesCarouselComponent } from '../../shared/components/series-carousel/series-carousel.component';
import { GetseriesService } from '../../shared/services/series/getseries.service';

@Component({
  selector: 'app-series',
  imports: [CarouselModule, SeriesCarouselComponent],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css',
})
export class SeriesComponent implements OnInit {
  private readonly _GetseriesService = inject(GetseriesService);

  topRated: Series[] = [];
  popular: Series[] = [];
  arrivingToday: Series[] = [];

  ngOnInit(): void {
    forkJoin({
      topRated: this._GetseriesService.popular(),
      popular: this._GetseriesService.topRated(),
      arrivingToday: this._GetseriesService.arrivingToday(),
    }).subscribe({
      next: ({ topRated, popular, arrivingToday }) => {
        this.topRated = topRated.results;
        this.popular = popular.results;
        this.arrivingToday = arrivingToday.results;
      },
    });
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    autoplay: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: false,
  };
}
