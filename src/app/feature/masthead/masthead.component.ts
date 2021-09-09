import { Component, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/core/images.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/core/search.service';

@Component({
  selector: 'app-masthead',
  templateUrl: './masthead.component.html',
  styleUrls: ['./masthead.component.scss'],
})
export class MastheadComponent implements OnInit {

  query: string = ''

  randomImage: string = '#';

  constructor(private imagesService: ImagesService) {}

  ngOnInit(): void {
    this.imagesService.getImages().subscribe({
      next: (result) => {
        this.randomImage = result.results[
          Math.floor(Math.random() * result.results.length)
        ].backdrop_path;
      },
    });
  }

  onSubmit(form: NgForm){
    this.query = form.value.search;
    
  }
}
