import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieDetailsService {
  private readonly _HttpClient = inject(HttpClient);

  getMovieDetails(movieId: number): Observable<any> {
    return this._HttpClient.get(`${environment.baseURL}/3/movie/${movieId}`);
  }

  getMovieCredits(movieId: number): Observable<any> {
    return this._HttpClient.get(`${environment.baseURL}/3/movie/${movieId}/credits`);
  }
}
