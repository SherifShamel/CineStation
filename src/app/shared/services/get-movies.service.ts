import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class GetMoviesService {
  private readonly _HttpClient = inject(HttpClient);

  getMovies(): Observable<any> {
    return this._HttpClient.get(`${environment.baseURL}/3/discover/movie`);
  }

  getPopular(): Observable<any> {
    return this._HttpClient.get(`${environment.baseURL}/3/movie/popular`);
  }

  getTopRated(): Observable<any> {
    return this._HttpClient.get(`${environment.baseURL}/3/movie/top_rated`);
  }
}
