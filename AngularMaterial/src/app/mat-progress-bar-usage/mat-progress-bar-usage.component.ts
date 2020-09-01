import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-progress-bar-usage',
  templateUrl: './mat-progress-bar-usage.component.html',
  styleUrls: ['./mat-progress-bar-usage.component.scss']
})
export class MatProgressBarUsageComponent implements OnInit {
  progress=12;
  timer;
  constructor() { }

  ngOnInit(): void {
    this.timer=setInterval(()=>{
      if(this.progress<100){
        this.progress=this.progress+1;
      }
    },1000)
  }

}
