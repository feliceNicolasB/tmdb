import { Component, OnInit } from '@angular/core';
import { TrendingsService } from 'src/app/core/trendings.service';
import { Result } from 'src/app/shared/images.interface';
import { Card } from "../../shared/card.interface";

@Component({
  selector: 'app-trendings',
  templateUrl: './trendings.component.html',
  styleUrls: ['./trendings.component.scss']
})
export class TrendingsComponent implements OnInit {

  todayTrendings: Result[] = [];

  constructor( private trendingsService: TrendingsService) { }

  ngOnInit(): void {
    // this.trendingsService.todayTrendings().pipe(
    //   tap(res => res.results.map(
    //     ({title, backdrop_path, release_date}) => this.todayTrendings.push({
    //       title, backdrop_path, release_date
    //     }),
    //   )),
    //   tap(() => console.log(this.todayTrendings))
    //   )
    // .subscribe()
    this.trendingsService.todayTrendings()
      .subscribe(res => this.todayTrendings = res.results.sort(() => Math.random() - 0.5))
  }

}
