import { Component, inject, OnInit } from '@angular/core';
import { Movies } from '../../../../core/interfaces/movies.interface';
import { GetMoviesService } from '../../../../shared/services/movies/get-movies.service';

import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-popular-movies',
  imports: [NgxPaginationModule, RouterLink],
  templateUrl: './movies-lists.component.html',
  styleUrl: './movies-lists.component.css',
})
export class PopularMoviesComponent implements OnInit {
  private readonly _GetMoviesService = inject(GetMoviesService);
  private readonly _ActivatedRoute = inject(ActivatedRoute);

  popularMovies: Movies[] = [];

  // MovieGenre
  movieGenre!: string | null;
  genreTitle!: string | null;
  // Carousel Props
  pageSize!: number;
  p!: number;
  total!: number;

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (res) => {
        this.movieGenre = res.get('genreTitle');
      },
    });
    this.getPopularMovies();

    this.genreTitle = sessionStorage.getItem('genre');
  }

  getPopularMovies(pageNumber: number = 1) {
    this._GetMoviesService.getGenre(pageNumber, this.movieGenre).subscribe({
      next: (res) => {
        this.popularMovies = res.results;

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
