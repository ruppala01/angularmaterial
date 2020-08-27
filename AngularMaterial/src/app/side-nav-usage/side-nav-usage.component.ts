import { Component, OnInit , ViewChild} from '@angular/core';
import{MatSidenav} from '@angular/material/sidenav';


@Component({
  selector: 'app-side-nav-usage',
  templateUrl: './side-nav-usage.component.html',
  styleUrls: ['./side-nav-usage.component.scss']
})
export class SideNavUsageComponent implements OnInit {

  @ViewChild("startNav") startNav:MatSidenav;
  @ViewChild("endNav") endNav:MatSidenav;

  constructor() { }

  ngOnInit(): void {
  }

  toggleStartSidenav(){
    if(this.startNav.opened){
      this.startNav.close();
    }else {
      this.startNav.open();
    }
  }

}
