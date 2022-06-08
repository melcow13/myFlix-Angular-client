import { Component, OnInit } from '@angular/core';
import { UserLoginComponent } from '../user-login/user-login.component';
import { UserRegistrationFormComponent } from '../user-registration-form/user-registration-form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
/**
 * opens dialog to display the UserRegistrationFormComponent
 */
  openUserRegistrationDialog(): void {
    this.dialog.open(UserRegistrationFormComponent, {
      width: '280px'
    });
  }
/**
 * opens dialog to display the UserLoginComponent
 */
  openUserLoginDialog(): void {
    this.dialog.open(UserLoginComponent,{
      width:'280px'
    });
  }

}
