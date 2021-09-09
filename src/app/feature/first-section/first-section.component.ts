import { Component, OnInit } from '@angular/core';
import { forkJoin} from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { StreamingService } from 'src/app/core/streaming.service';
import { Result } from '../../shared/images.interface';

@Component({
  selector: 'app-first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.scss'],
})
export class FirstSectionComponent implements OnInit {
  movieStreaming: Result[] = [];
  tvStreaming: Result[] = [];
  streaming: Result[] = [];
  certifications: Result[] = [];
  final: Result[] = []


  constructor(private streamingService: StreamingService) {}

  ngOnInit(): void {
    // this.streamingService.getMovieStreaming().subscribe(res => this.movieStreaming =  res.results);
    // this.streamingService.getTvStreaming().subscribe(res => this.tvStreaming = res.results);

    forkJoin([
      this.streamingService.getMovieStreaming(),
      this.streamingService.getTvStreaming(),
    ])
    .pipe(
      map(
        ([movies, tv]) => [...movies.results, ...tv.results]
        )
    ).subscribe(res => {
      this.streaming = res.sort(() => Math.random() - 0.5 );
    });

    this.streamingService.getClassification().pipe(
      map(res => res.certifications.IT),
      tap(res => {
        this.final = this.streaming;
        this.final.map(x => {
          if(!x.adult){
            x.certifications = res
          }
        })
        this.certifications = res;
        console.log(this.streaming);  
      })  
    ).subscribe()
  }
}