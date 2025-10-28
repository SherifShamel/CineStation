import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class GetMoviesService {
  private readonly _HttpClient = inject(HttpClient);

  getNowPlaying(): Observable<any> {
    return this._HttpClient.get(`${environment.baseURL}/3/movie/now_playing`);
  }

  getPopular(pageNumber: number = 1): Observable<any> {
    return this._HttpClient.get(`${environment.baseURL}/3/movie/popular?page=${pageNumber}`);
  }

  getGenre(pageNumber: number = 1, genre: string | null): Observable<any> {
    return this._HttpClient.get(`${environment.baseURL}/3/movie/${genre}?page=${pageNumber}`);
  }

  getTopRated(): Observable<any> {
    return this._HttpClient
      .get(`${environment.baseURL}/3/movie/top_rated`)
      .pipe(shareReplay({ bufferSize: 1, refCount: true }));
    // If you want lightweight caching for future reuse, prefer the safe pattern above (the pipe)
  }
  getUpcoming(): Observable<any> {
    return this._HttpClient.get(`${environment.baseURL}/3/movie/upcoming`);
  }

  getRecommendations(movieId: number): Observable<any> {
    return this._HttpClient.get(`${environment.baseURL}/3/movie/${movieId}/recommendations`);
  }

  searchMovies(movie: string): Observable<any> {
    return this._HttpClient.get(`${environment.baseURL}/3/search/movie`, {
      params: {
        query: movie,
      },
    });
  }
}
