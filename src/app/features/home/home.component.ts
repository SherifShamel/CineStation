import { Component, inject, OnInit } from '@angular/core';
import { Movies } from '../../core/interfaces/movies.interface';
import { MainCarouselComponent } from '../../shared/components/main-carousel/main-carousel.component';
import { GetMoviesService } from '../../shared/services/get-movies.service';
import { HerosectionComponent } from './component/herosection/herosection.component';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-home',
  imports: [HerosectionComponent, MainCarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  private readonly _GetMoviesService = inject(GetMoviesService);

  movies!: Movies[];
  popular!: Movies[];
  title!: string;
  moviesTitle: string = 'Movies';
  moviespopular: string = 'Popular Movies';
  ngOnInit(): void {
    this._GetMoviesService.getTopRated().subscribe({
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
