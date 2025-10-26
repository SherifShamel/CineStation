import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDetails } from '../../core/interfaces/movie-details.interface';
import { MovieDetailsService } from '../../shared/services/movieDetails/movie-details.service';
import { CastSectionComponent } from './cast-section/cast-section.component';
import { IVideos } from '../../core/interfaces/ivideos.interface';

@Component({
  selector: 'app-movie-details',
  imports: [CastSectionComponent],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent implements OnInit {
  private readonly _ActivatedRoute = inject(ActivatedRoute);
  private readonly _MovieDetailsService = inject(MovieDetailsService);
  private readonly _Router = inject(Router);

  movieId!: any;
  movieDetails: MovieDetails = {} as MovieDetails;
  videos: IVideos[] = [];
  rightTrailer!: IVideos | undefined;

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

    this.openTrailer();
  }
  getRightTrailer(video: IVideos) {
    return video ? video.type == 'Trailer' && video.official == true : ({} as IVideos);
  }

  openTrailer() {
    this._MovieDetailsService.getMovieVideos(this.movieId).subscribe({
      next: (res) => {
        this.videos = res.results;

        this.rightTrailer = this.videos.find(this.getRightTrailer);

        console.log(this.rightTrailer);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
