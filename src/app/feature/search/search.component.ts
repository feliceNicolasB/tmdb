import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from 'src/app/core/search.service';
import { switchMap, tap } from 'rxjs/operators';
import { Search } from 'src/app/shared/search.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  results$?: Search[];

  constructor(private searchService: SearchService, 
              private http: ActivatedRoute) { }

  ngOnInit(): void {
    this.http.url.pipe(
      switchMap(res => this.searchService.searchMulti(res[1].path)),
    ).subscribe(res => this.results$ = res.results)
  }

}
