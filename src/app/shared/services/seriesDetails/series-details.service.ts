import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class SeriesDetailsService {
  private readonly _HttpClient = inject(HttpClient);

  getSeriesDetails(seriesId: number): Observable<any> {
    return this._HttpClient.get(`${environment.baseURL}/3/tv/${seriesId}`);
  }

  getSeriesCredits(seriesId: number): Observable<any> {
    return this._HttpClient.get(`${environment.baseURL}/3/tv/${seriesId}/credits`);
  }

  getSeriesVideos(seriesId: number,key:string=''): Observable<any> {
    return this._HttpClient.get(`${environment.baseURL}/3/tv/${seriesId}/videos#play${key}`);
  }
}
