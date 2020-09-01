import { Component, OnInit } from '@angular/core';

import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-mat-icon-usage',
  templateUrl: './mat-icon-usage.component.html',
  styleUrls: ['./mat-icon-usage.component.scss']
})
export class MatIconUsageComponent implements OnInit {

  constructor(iconRegistry:MatIconRegistry,sanitizer:DomSanitizer) { 
    iconRegistry.addSvgIcon('at-symbol',sanitizer.bypassSecurityTrustResourceUrl('assets/icons/at-symbol.svg'))
  }

  ngOnInit(): void {
  }

}
