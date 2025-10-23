import { Component, inject, OnInit } from '@angular/core';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { ActivatedRoute } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ISeriesCast } from '../../../core/interfaces/iseries-cast.interface';
import { SeriesDetailsService } from '../../../shared/services/seriesDetails/series-details.service';

@Component({
  selector: 'app-series-cast-section',
  imports: [MatTabGroup, MatTab, CarouselModule],
  templateUrl: './series-cast-section.component.html',
  styleUrl: './series-cast-section.component.css',
})
export class SeriesCastSectionComponent implements OnInit {
  private readonly _SeriesDetailsService = inject(SeriesDetailsService);
  private readonly _ActivatedRoute = inject(ActivatedRoute);

  seriesId!: any;
  seriesCast!: ISeriesCast[];

  ngOnInit(): void {
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
  }

  customOptions: OwlOptions = {
    loop: false,
    stagePadding: 0,
    lazyLoad: true,
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
        items: 3,
      },
      740: {
        items: 5,
      },
      940: {
        items: 6,
      },
    },
    // nav: true,
  };
}
