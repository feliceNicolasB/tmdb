import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() movie_id?: number;
  @Input() poster_path = '';
  @Input() vote_average = 0;
  @Input() title = '';
  @Input() name = '';
  @Input() release_date = '';

  constructor() { }

  ngOnInit(): void {
  }

}
