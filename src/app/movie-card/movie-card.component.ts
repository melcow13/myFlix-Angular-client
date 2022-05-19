import { Component, OnInit } from '@angular/core';
// This import brings in the API calls we created in 6.2
import { UserRegistrationService } from '../fetch-api-data.service';
import { GenreComponent } from '../genre/genre.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DirectorCardComponent } from '../director-card/director-card.component';
import { SynopsisCardComponent } from '../synopsis-card/synopsis-card.component';
@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  user: any = {};
  Username = localStorage.getItem('user');
  movies: any[] = [];
  

  constructor(
    public fetchApiData: UserRegistrationService, 
    public dialog: MatDialog,
    public snackBar: MatSnackBar, 
    public router: Router) { }

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
  openGenreDialog(name: string, description: string): void {
    this.dialog.open(GenreComponent, {
      data: {
        Name: name,
        Description: description,
      },
      width: '500px'
    });
  }

  openDirectorDialog(name: string, bio: string, birth: string): void {
    this.dialog.open(DirectorCardComponent, {
      data: {
        Name: name,
        Bio: bio,
        Birth: birth
      },
      width: '500px'
    });
  }

  openSynopsisDialog(title: string, description: string, image: string): void {
    this.dialog.open(SynopsisCardComponent, {
      data: {
        ImagePath: image,
        Title: title,
        Description: description
      },
      width: '500px'
    });
  }
  addFavorite(id: string, Title: string): void {
    console.log(id);
    const token = localStorage.getItem('token');
  
    console.log(token)
    this.fetchApiData.addFavoriteMovies(id).subscribe((res: any)=>{
      this.snackBar.open(`Successfully added ${Title} to Favorite.`,'Ok', {
        duration: 4000,
        verticalPosition: 'top'
      });
      console.log(res)
      this.ngOnInit();
    });
  }


}
