import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from '../shared/images.interface';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  private baseUrl: string = 'https://api.themoviedb.org/3';
  private api_key: string = '31fd982e810d6a6f022880999aacfbee';

  constructor(private http: HttpClient) {}

  getImages(): Observable<{
    page: number;
    results: Array<Result>;
  }> {
    const params = new HttpParams({ fromObject: { api_key: this.api_key } });
    return this.http.get<{
      page: number;
      results: Array<Result>;
    }>(`${this.baseUrl}/movie/popular`, { params: params });
  }

  
}
