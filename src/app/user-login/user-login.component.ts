// src/app/user-registration-form/user-registration-form.component.ts
import { Component, OnInit, Input } from '@angular/core';

// You'll use this import to close the dialog on success
import { MatDialogRef } from '@angular/material/dialog';

// This import brings in the API calls we created in 6.2
import { UserRegistrationService } from '../fetch-api-data.service';

// This import is used to display notifications back to the user
import { MatSnackBar } from '@angular/material/snack-bar';
//route after login to movies component 
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  @Input() userCredentials = { Username: '', Password: '' };

constructor(
    public fetchApiData: UserRegistrationService,
    public dialogRef: MatDialogRef<UserLoginComponent>,
    public snackBar: MatSnackBar, 
    public router: Router) { }

ngOnInit(): void {
}

// This is the function responsible for sending the form inputs to the backend
loginUser(): void {
  this.fetchApiData.userLogin(this.userCredentials).subscribe(
    (response) => {
      console.log(response);
      localStorage.setItem('user', response.user.Username);
      localStorage.setItem('token', response.token);
      this.dialogRef.close();
      this.snackBar.open('You are logged in', 'OK', {
        duration: 2000,
        verticalPosition: 'top'
      });
      this.router.navigate(['movies']);
    },
    (response) => {
      this.snackBar.open(response, 'OK', {
        duration: 2000,
      });
    }
  );
}

}