import { Component, OnInit } from '@angular/core';

import {MatSnackBar} from '@angular/material/snack-bar'

@Component({
  selector: 'app-mat-snack-bar-usage',
  templateUrl: './mat-snack-bar-usage.component.html',
  styleUrls: ['./mat-snack-bar-usage.component.scss']
})
export class MatSnackBarUsageComponent implements OnInit {

  constructor(public snackBar:MatSnackBar) { }

  ngOnInit(): void {

  }

  showSnackBar(firstName:string,lastName:string){
    let message =`Hi ${firstName} ${lastName}`;
    let action="Ok"
    let options={
      duration:5000
    }
    let snackBarRef = this.snackBar.open(message,action,options);
    snackBarRef.onAction().subscribe(()=>{
      console.log("Action was taken on snackbar");
    });

    snackBarRef.afterDismissed.apply(()=>{
      console.log("Action was taken on snackbar");
    })
  }
}
