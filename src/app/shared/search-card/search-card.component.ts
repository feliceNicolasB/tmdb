import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss']
})
export class SearchCardComponent implements OnInit {

  @Input() poster_path = ''
  @Input() title = ''
  @Input() name = ''
  @Input() release_date = ''
  @Input() overview = ''

  constructor() { }

  ngOnInit(): void {
  }

}
