import { Component, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/core/films.service';
import { Result } from "../../shared/images.interface";

@Component({
  selector: 'app-second-section',
  templateUrl: './second-section.component.html',
  styleUrls: ['./second-section.component.scss']
})
export class SecondSectionComponent implements OnInit {

  freeFilms: Result[] = []

  constructor(private filmsService: FilmsService) { }

  ngOnInit(): void {
    this.filmsService.getFilms().subscribe(res => this.freeFilms = res.results.sort(() => Math.random() - 0.5))
  }

}
