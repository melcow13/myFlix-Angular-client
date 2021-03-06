import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { UserLoginComponent } from './user-login/user-login.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import {MatIconModule} from '@angular/material/icon';
import { GenreComponent } from './genre/genre.component';
import { DirectorCardComponent } from './director-card/director-card.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { SynopsisCardComponent } from './synopsis-card/synopsis-card.component'
@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationFormComponent,
    UserLoginComponent,
    MovieCardComponent,
    WelcomePageComponent,
    GenreComponent,
    DirectorCardComponent,
    ProfileCardComponent,
    NavbarComponent,
    EditUserComponent,
    SynopsisCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
