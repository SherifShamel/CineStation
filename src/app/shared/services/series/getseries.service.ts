import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class GetseriesService {
  private readonly _HttpClient = inject(HttpClient);

  topRated(): Observable<any> {
    return this._HttpClient.get(`${environment.baseURL}/3/tv/top_rated`);
  }
  popular(): Observable<any> {
    return this._HttpClient.get(`${environment.baseURL}/3/tv/popular`);
  }
  arrivingToday(): Observable<any> {
    return this._HttpClient.get(`${environment.baseURL}/3/tv/airing_today`);
  }

  getGenre(pageNumber: number = 1, genre: string | null): Observable<any> {
    return this._HttpClient.get(`${environment.baseURL}/3/tv/${genre}?page=${pageNumber}`);
  }

  getRecommendations(seriesId: number): Observable<any> {
    return this._HttpClient.get(`${environment.baseURL}/3/tv/${seriesId}/recommendations`);
  }
}
