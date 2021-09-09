import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PopularMovie, Result } from '../shared/images.interface';

@Injectable({
  providedIn: 'root'
})
export class StreamingService {

  private apiUrl: string = "https://api.themoviedb.org/3";
  private api_key: string = "31fd982e810d6a6f022880999aacfbee";

  constructor( private http: HttpClient) { }

  getMovieStreaming(): Observable<PopularMovie<Result>>{
    const params = new HttpParams({ fromObject: { api_key: this.api_key, watch_region: 'IT', with_watch_monetization_types: 'flatrate'}})
    return this.http.get<PopularMovie<Result>>(`${this.apiUrl}/discover/movie`, { params: params})
  }

  getTvStreaming(): Observable<PopularMovie<Result>>{
    const params = new HttpParams({ fromObject: { api_key: this.api_key, watch_region: 'IT', with_watch_monetization_types: 'flatrate'}})
    return this.http.get<PopularMovie<Result>>(`${this.apiUrl}/discover/tv`, { params: params})
  }

  getClassification(): Observable<any>{
    const params = new HttpParams({ fromObject: { api_key: this.api_key}})
    return this.http.get<any>(`${this.apiUrl}/certification/movie/list`, { params: params})
  }
}
