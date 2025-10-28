import { Component, inject, Input, OnInit } from '@angular/core';
import { MatTab, MatTabChangeEvent, MatTabGroup } from '@angular/material/tabs';
import { ActivatedRoute, Router } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ICast } from '../../../../core/interfaces/icast.interface';
import { MovieDetails } from '../../../../core/interfaces/movie-details.interface';
import { Movies } from '../../../../core/interfaces/movies.interface';
import { MovieDetailsService } from '../../../../shared/services/movieDetails/movie-details.service';
import { GetMoviesService } from '../../../../shared/services/movies/get-movies.service';
import { CastCarouselComponent } from '../cast-carousel/cast-carousel.component';

@Component({
  selector: 'app-cast-section',
  imports: [CarouselModule, MatTabGroup, MatTab, CastCarouselComponent],
  templateUrl: './cast-section.component.html',
  styleUrl: './cast-section.component.css',
})
export class CastSectionComponent implements OnInit {
  private readonly _MovieDetailsService = inject(MovieDetailsService);
  private readonly _GetMoviesService = inject(GetMoviesService);
  private readonly _ActivatedRoute = inject(ActivatedRoute);
  private readonly _Router = inject(Router);

  @Input() movieDetails!: MovieDetails;

  movieId!: any;
  movieCast: ICast[] = [];
  recommendations!: Movies[];
  isDragging: boolean = false;

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.movieId = params.get('m_id');
      },
    });

    this._Router.routeReuseStrategy.shouldReuseRoute = () => false;

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

  onTabChange(event: MatTabChangeEvent) {
    setTimeout(() => window.dispatchEvent(new Event('resize')), 50);
  }
}
