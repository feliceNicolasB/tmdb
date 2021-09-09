import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PopularMovie, Result } from '../shared/images.interface';


@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  private apiUrl: string = "https://api.themoviedb.org/3";
  private api_key: string = "31fd982e810d6a6f022880999aacfbee";

  constructor( private http: HttpClient) { }

  getFilms(): Observable<PopularMovie<Result>>{
    const params = new HttpParams({ fromObject: { api_key: this.api_key, watch_region: 'IT', with_watch_monetization_types: 'ads'}})
    return this.http.get<PopularMovie<Result>>(`${this.apiUrl}/discover/movie`, { params: params})
  }

}

