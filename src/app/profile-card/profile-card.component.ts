import { Component, OnInit, Input } from '@angular/core';
// This import brings in the API calls
import { UserRegistrationService } from '../fetch-api-data.service';

// This import is used to display notifications back to the user
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
//route after login to movies component 
import { Router } from '@angular/router';
import { EditUserComponent } from '../edit-user/edit-user.component';


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

  getUser(): void {
    const user = localStorage.getItem('user');
    if (user) {
      this.fetchApiData.getUserProfile().subscribe((resp: any) => {
        this.user = resp;
        console.log(this.user);
      });
    }
  }

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
}
