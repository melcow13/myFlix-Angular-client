import { Component, OnInit } from '@angular/core';
// This import brings in the API calls we created in 6.2
import { UserRegistrationService } from '../fetch-api-data.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  movies: any[]= [];
  constructor(public fetchApiData: UserRegistrationService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any)=>{
      this.movies = resp;
      console.log(this.movies);
      return this.movies;
    })
  }

}