import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetailsService } from 'src/app/core/movie-details.service';
import { MovieDetails } from 'src/app/shared/movie-details.interface';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movieDetails?: MovieDetails;

  constructor(private movieDetailService: MovieDetailsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const movie_id = Number(this.route.snapshot.paramMap.get('movie_id'));
    console.log(movie_id)
    this.movieDetailService.movieDetails(movie_id).subscribe(res => this.movieDetails = res)
  }

}
