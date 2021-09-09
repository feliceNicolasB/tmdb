import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieDetails } from '../shared/movie-details.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailsService {

  private apiUrl: string = "https://api.themoviedb.org/3";
  private api_key: string = "31fd982e810d6a6f022880999aacfbee";

  constructor(private http: HttpClient) { }

  movieDetails(movie_id:number): Observable<MovieDetails>{
    const params = new HttpParams({ fromObject: { api_key: this.api_key, language: 'it-IT'}})
    return this.http.get<MovieDetails>(`${this.apiUrl}/movie/${movie_id}`, {params: params})
  }
}
