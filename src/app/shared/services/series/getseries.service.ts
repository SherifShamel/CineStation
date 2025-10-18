import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GetseriesService {
  private readonly _HttpClient = inject(HttpClient);

  topRated(): Observable<any> {
    return this._HttpClient.get(`${environment.baseURL}/3/tv/top_rated`);
  }
}
