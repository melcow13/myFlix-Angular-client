import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, catchError } from 'rxjs';
import { map } from 'rxjs/operators';

//Declaring the api url that will provide data for the client app
const apiUrl = 'YOUR_HOSTED_API_URL_HERE/';
@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {
  // Inject the HttpClient module to the constructor params
 // This will provide HttpClient to the entire class, making it available via this.http
  constructor(private http: HttpClient) {
  }
 // Making the api call for the user registration endpoint
  public userRegistration(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http.post(apiUrl + 'users', userDetails).pipe(
    catchError(this.handleError)
    );
  }

  // user login
  public userLogin(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http
    .post(apiUrl + 'login', userDetails)
    .pipe(catchError(this.handleError)
    );
  }

  //get all movies
  getAllMovies(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'movies', {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })
    })
    .pipe(catchError(this.handleError)
    );
  }

  //get one movie
  getOneMovie(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'movies/:movieId', {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })
    })
    .pipe(catchError(this.handleError)
    );
  }

  //get director

  getDirector(): Observable<any> {
    const token=localStorage.getItem('token');
    return this.http.get(apiUrl +'director', {headers: new HttpHeaders(
      {
      Authorization: 'Bearer' + token,
    })
  })
  .pipe(catchError(this.handleError)
    );
  }

  //get genre
  getGenre(): Observable<any> {
    const token=localStorage.getItem('token');
    return this.http.get(apiUrl +'genre', {headers: new HttpHeaders(
      {
      Authorization: 'Bearer' + token,
    })
  })
  .pipe(catchError(this.handleError)
    );
  }

  //get user
  getUser(): Observable<any> {
    const token=localStorage.getItem('token');
    return this.http.get(apiUrl +'profile', {headers: new HttpHeaders(
      {
      Authorization: 'Bearer' + token,
    })
  })
  .pipe(catchError(this.handleError)
    );
  }

//get favorite movies for a user
getFavoriteMovies(): Observable<any> {
  const token=localStorage.getItem('token');
  return this.http.get(apiUrl +'favorite', {headers: new HttpHeaders(
    {
    Authorization: 'Bearer' + token,
      })
    })
  .pipe(catchError(this.handleError)
  );
}

  // add a movie to favorite movies list
  addFavoriteMovies(id:string): Observable<any> {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    return this.http
    .post(apiUrl + `users/${username}/movies/${id}`, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      }),
    })
    .pipe(catchError(this.handleError));
  }

  // delete movie from favorite movies list
  deleteFavoriteMovies(id:string): Observable<any> {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    return this.http
    .delete(apiUrl + `users/${username}/movies/${id}`, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      }),
    })
    .pipe(catchError(this.handleError));
  }

  // get users profile information
  getUserProfile(): Observable<any> {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    return this.http
    .get(apiUrl + `users/${username}`, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      }),
    })
    .pipe(catchError(this.handleError));
  }

  // edit user's profile information
  editUserProfile(userData:object): Observable<any> {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    return this.http
    .put(apiUrl + `users/${username}`, userData, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      }),
    })
    .pipe(catchError(this.handleError));
  }

  // delete user profile
  deleteUserProfile(): Observable<any> {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    return this.http
    .delete(apiUrl + `users/${username}`, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      }),
    })
    .pipe(catchError(this.handleError));
  }

// Non-typed response extraction
private extractResponseData(res: Response): any {
    const body = res;
    return body || { };
  }

private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
    } else {
    console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
    'Something bad happened; please try again later.');
  }
}