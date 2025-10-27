import { Component, inject, Input, OnInit } from '@angular/core';
import { MatTab, MatTabChangeEvent, MatTabGroup } from '@angular/material/tabs';
import { ActivatedRoute, Router } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ISeriesCast } from '../../../core/interfaces/iseries-cast.interface';
import { SeriesDetailsService } from '../../../shared/services/seriesDetails/series-details.service';
import { ISeriesDetails } from '../../../core/interfaces/iseries-details.interface';
import { Series } from '../../../core/interfaces/series.interface';
import { GetseriesService } from '../../../shared/services/series/getseries.service';

@Component({
  selector: 'app-series-cast-section',
  imports: [MatTabGroup, MatTab, CarouselModule],
  templateUrl: './series-cast-section.component.html',
  styleUrl: './series-cast-section.component.css',
})
export class SeriesCastSectionComponent implements OnInit {
  private readonly _SeriesDetailsService = inject(SeriesDetailsService);
  private readonly _GetseriesService = inject(GetseriesService);
  private readonly _ActivatedRoute = inject(ActivatedRoute);
  private readonly _Router = inject(Router);

  seriesId!: any;
  seriesCast: ISeriesCast[] = [];
  @Input() seriesDetails!: ISeriesDetails;
  recommendations!: Series[];

  isDragging: boolean = false;

  ngOnInit(): void {
    this._Router.routeReuseStrategy.shouldReuseRoute = () => false;

    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.seriesId = params.get('m_id');
      },
    });

    this._SeriesDetailsService.getSeriesCredits(this.seriesId).subscribe({
      next: (res) => {
        this.seriesCast = res.cast;
        // console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });

    this._GetseriesService.getRecommendations(this.seriesId).subscribe({
      next: (res) => {
        this.recommendations = res.results;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  customOptions: OwlOptions = {
    loop: false,
    stagePadding: 0,
    lazyLoad: true,
    margin: 10,
    responsiveRefreshRate: 100,

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
        items: 3,
      },
      740: {
        items: 4,
      },
      940: {
        items: 5,
      },
    },
    // nav: true,
  };

  onTabChange(event: MatTabChangeEvent) {
    setTimeout(() => window.dispatchEvent(new Event('resize')), 50);
  }
}
