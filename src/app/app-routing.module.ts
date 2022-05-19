import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { GenreComponent } from './genre/genre.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'movies', component: MovieCardComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'prefix' },
  { path: 'genre', component: GenreComponent},
  {path: 'profile', component: ProfileCardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
