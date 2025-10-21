import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Movies } from '../../../../core/interfaces/movies.interface';
import { GetseriesService } from '../../../../shared/services/series/getseries.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { Series } from '../../../../core/interfaces/series.interface';

@Component({
  selector: 'app-series-lists',
  imports: [NgxPaginationModule, RouterLink],
  templateUrl: './series-lists.component.html',
  styleUrl: './series-lists.component.css',
})
export class SeriesListsComponent {
  private readonly _GetseriesService = inject(GetseriesService);
  private readonly _ActivatedRoute = inject(ActivatedRoute);

  popularSeries: Series[] = [];

  // MovieGenre
  seriesGenre!: string | null;
  genreTitle!: string | null;
  // Carousel Props
  pageSize!: number;
  p!: number;
  total!: number;

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (res) => {
        this.seriesGenre = res.get('genreTitle');
      },
    });
    this.getPopularSeries();

    this.genreTitle = sessionStorage.getItem('genre');
  }

  getPopularSeries(pageNumber: number = 1) {
    this._GetseriesService.getGenre(pageNumber, this.seriesGenre).subscribe({
      next: (res) => {
        this.popularSeries = res.results;

        this.pageSize = res.results.length;
        this.p = res.page;
        this.total = res.total_results;
      },
      error: (err) => {
        console.log(err);
      },
    });

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  pageChanged(newPage: number) {
    this.p = newPage;
  }
}
