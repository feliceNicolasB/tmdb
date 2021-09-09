import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PopularMovie, Result } from '../shared/images.interface';

@Injectable({
  providedIn: 'root'
})
export class TrendingsService {

  private apiUrl: string = "https://api.themoviedb.org/3";
  private api_key: string = "31fd982e810d6a6f022880999aacfbee";

  constructor(private http: HttpClient) { }

  todayTrendings(): Observable<PopularMovie<Result>> {
    const params  = new HttpParams({ fromObject: {api_key: this.api_key}})
    return this.http.get<PopularMovie<Result>>(`${this.apiUrl}/trending/movie/day`, {params: params})
  }
}