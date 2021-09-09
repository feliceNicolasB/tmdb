import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private apiUrl: string = "https://api.themoviedb.org/3";
  private api_key: string = "31fd982e810d6a6f022880999aacfbee";

  constructor(private http: HttpClient) { }

  searchMulti(query: string): Observable<any>{
    const options = new HttpParams({ fromObject: { api_key: this.api_key, language: 'it-IT', query: query}});
    return this.http.get<any>(`${this.apiUrl}/search/multi`, {params: options})
  }
}
