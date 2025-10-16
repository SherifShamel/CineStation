import { Component, inject, OnInit } from '@angular/core';
import { Movies } from '../../core/interfaces/movies.interface';
import { GetMoviesService } from '../../shared/services/get-movies.service';
import { HerosectionComponent } from './component/herosection/herosection.component';
import { NewsectionComponent } from './component/newsection/newsection/newsection.component';
import { TopRatedComponent } from './component/top-rated/top-rated.component';

@Component({
  selector: 'app-home',
  imports: [HerosectionComponent, NewsectionComponent, TopRatedComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  private readonly _GetMoviesService = inject(GetMoviesService);
  movies!: Movies[];
  popular!: Movies[];
  moviesTitle: string = 'Movies';
  moviespopular: string = 'Popular Movies';
  ngOnInit(): void {
    this._GetMoviesService.getMovies().subscribe({
      next: (res) => {
        this.movies = res.results;
      },
      error: (err) => {
        console.log(err);
      },
    });

    this._GetMoviesService.getPopular().subscribe({
      next: (res) => {
        this.popular = res.results;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
