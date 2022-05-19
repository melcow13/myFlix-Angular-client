import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-synopsis-card',
  templateUrl: './synopsis-card.component.html',
  styleUrls: ['./synopsis-card.component.css']
})
export class SynopsisCardComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA)
 public data: {
   ImagePath: string,
   Title: string,
   Description: string;
 }
) { }

ngOnInit(): void {
}

}

