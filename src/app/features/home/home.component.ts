import { Component, inject, OnInit } from '@angular/core';
import { Movies } from '../../core/interfaces/movies.interface';
import { MainCarouselComponent } from '../../shared/components/main-carousel/main-carousel.component';
import { GetMoviesService } from '../../shared/services/movies/get-movies.service';
import { HerosectionComponent } from './component/herosection/herosection.component';
import { GetseriesService } from '../../shared/services/series/getseries.service';
import { Series } from '../../core/interfaces/series.interface';
import { SeriesCarouselComponent } from '../../shared/components/series-carousel/series-carousel.component';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [HerosectionComponent, MainCarouselComponent, SeriesCarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  private readonly _GetMoviesService = inject(GetMoviesService);
  private readonly _GetseriesService = inject(GetseriesService);

  topRated!: Movies[];
  popular!: Movies[];
  nowPlayingMovies!: Movies[];
  upcomingMovies!: Movies[];

  topRatedSeries!: Series[];

  title!: string;

  ngOnInit(): void {
    forkJoin({
      topRated: this._GetMoviesService.getTopRated(),
      popularMovies: this._GetMoviesService.getPopular(),
      nowPlayingMovies: this._GetMoviesService.nowPlaying(),
      upcomingMovies: this._GetMoviesService.getUpcoming(),
    }).subscribe({
      next: ({ topRated, popularMovies, nowPlayingMovies, upcomingMovies }) => {
        this.topRated = topRated.results;
        this.popular = popularMovies.results;
        this.nowPlayingMovies = nowPlayingMovies.results;
        this.upcomingMovies = upcomingMovies.results;
      },
      error: (err) => {
        console.log(err);
      },
    });

    // this._GetMoviesService.getTopRated().subscribe({
    //   next: (res) => {
    //     this.topRated = res.results;
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    // });

    // this._GetMoviesService.getPopular().subscribe({
    //   next: (res) => {
    //     this.popular = res.results;
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    // });

    // this._GetMoviesService.nowPlaying().subscribe({
    //   next: (res) => {
    //     this.nowPlayingMovies = res.results;
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    // });

    // this._GetMoviesService.getUpcoming().subscribe({
    //   next: (res) => {
    //     this.upcomingMovies = res.results;
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    // });

    // this._GetseriesService.topRated().subscribe({
    //   next: (res) => {
    //     this.topRatedSeries = res.results;
    //     // console.log(this.topRatedSeries);
    //   },
    // });
  }
}
