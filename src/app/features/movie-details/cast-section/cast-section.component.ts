import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ICast } from '../../../core/interfaces/icast.interface';
import { Movies } from '../../../core/interfaces/movies.interface';
import { MovieDetailsService } from '../../../shared/services/movieDetails/movie-details.service';
import { GetMoviesService } from '../../../shared/services/movies/get-movies.service';
@Component({
  selector: 'app-cast-section',
  imports: [CarouselModule],
  templateUrl: './cast-section.component.html',
  styleUrl: './cast-section.component.css',
})
export class CastSectionComponent implements OnInit {
  private readonly _MovieDetailsService = inject(MovieDetailsService);
  private readonly _GetMoviesService = inject(GetMoviesService);
  private readonly _ActivatedRoute = inject(ActivatedRoute);

  movieId!: any;
  movieCast!: ICast[];
  recommendations!: Movies[];

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.movieId = params.get('m_id');
      },
    });

    this._GetMoviesService.getRecommendations(this.movieId).subscribe({
      next: (res) => {
        this.recommendations = res.results;
      },
      error: (err) => {
        console.log(err);
      },
    });

    this._MovieDetailsService.getMovieCredits(this.movieId).subscribe({
      next: (res) => {
        this.movieCast = res.cast;
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
        items: 4,
      },
      940: {
        items: 5,
      },
    },
    // nav: true,
  };
}
