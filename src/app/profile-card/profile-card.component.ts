import { Component, OnInit, Input } from '@angular/core';
// This import brings in the API calls
import { UserRegistrationService } from '../fetch-api-data.service';

// This import is used to display notifications back to the user
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
//route after login to movies component 
import { Router } from '@angular/router';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { DirectorCardComponent } from '../director-card/director-card.component';
import { GenreComponent } from '../genre/genre.component';
import { SynopsisCardComponent } from '../synopsis-card/synopsis-card.component';
@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {
  user: any = {};
  movies: any[] = [];
  userName: any = localStorage.getItem('user');
  favorite: any = null;
  favoriteMovies: any[] = [];
  displayElement: boolean = false

  constructor(
    public fetchApiData: UserRegistrationService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar, 
    public router: Router
  ) { }

  ngOnInit(): void {

    this.getUser();
    this.getFavorites()  
  }
/**
 * get data of a user
 * @function getUserProfile
 */
  getUser(): void {
    const user = localStorage.getItem('user');
    if (user) {
      this.fetchApiData.getUserProfile().subscribe((resp: any) => {
        this.user = resp;
        console.log(this.user);
      });
    }
  }

  /**
   * get array of user's favorite movies
   * @function getAllMovies
   */
  getFavorites(): void {
    let movies: any[] = [];
    this.fetchApiData.getAllMovies().subscribe((res: any) => {
      movies = res;
      movies.forEach((movie: any) => {
        if (this.user.FavoriteMovies.includes(movie._id)) {
          this.favoriteMovies.push(movie);
          this.displayElement = true;
        }
        });
      
    }); 
  }

  /**
   * delete movie from the favroite movie array
   * @param id {string}
   * @function deleteFavoriteMovies
   */
  deletFavorite(id: string): void {
    this.fetchApiData.deleteFavoriteMovies(id).subscribe((res: any) => {
      this.snackBar.open('Successfully removed from favorite movies.', 'OK', {
        duration: 2000,
      });
      this.ngOnInit();
      return this.favorite;
    })
  }

  /**
   * opens the dialog to display the EditUserComponent
   * @param name {string}
   * @param birthday {string}
   * @param email {string}
   */
  openEditUserDialog(name: string, birthday: string, email: string): void {
    this.dialog.open(EditUserComponent, {
      data: {
        Name: name,
        Birthday: birthday,
        Emai: email
      },
      width: '500px'
    });
  }
/**
 * opens the dialog to display GenreComponent
 * @param name {string}
 * @param description {string}
 */
  openGenreDialog(name: string, description: string): void {
    this.dialog.open(GenreComponent, {
      data: {
        Name: name,
        Description: description,
      },
      width: '500px'
    });
  }
/**
 * opens the dialog to display DirectorCardCompnonet
 * @param name {string}
 * @param bio {string}
 * @param birth {string}
 */
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

  /**
   * opens the dialog to display SynopsisCardComponent
   * @param title {string}
   * @param description {string}
   * @param image {string}
   */
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
}
