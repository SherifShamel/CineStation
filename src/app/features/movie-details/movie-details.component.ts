import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetMoviesService } from '../../shared/services/movies/get-movies.service';
import { MovieDetails } from '../../core/interfaces/movie-details.interface';
import { CastSectionComponent } from './cast-section/cast-section.component';
import { MovieDetailsService } from '../../shared/services/movieDetails/movie-details.service';

@Component({
  selector: 'app-movie-details',
  imports: [CastSectionComponent],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent implements OnInit {
  private readonly _ActivatedRoute = inject(ActivatedRoute);
  private readonly _GetMoviesService = inject(GetMoviesService);
  private readonly _MovieDetailsService = inject(MovieDetailsService);

  movieId!: any;
  movieDetails: MovieDetails = {} as MovieDetails;

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.movieId = params.get('m_id');
      },
    });

    this._MovieDetailsService.getMovieDetails(this.movieId).subscribe({
      next: (res) => {
        this.movieDetails = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
