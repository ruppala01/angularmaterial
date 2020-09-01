import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { MyMaterialModule } from './my-material.module';
import {MatCheckBoxUsageComponent} from './mat-check-box-usage/mat-check-box-usage.component';
import { MatSliderToggleUsageComponent } from './mat-slider-toggle-usage/mat-slider-toggle-usage.component';
import { MenuToolbarUsageComponent } from './menu-toolbar-usage/menu-toolbar-usage.component';
import { SideNavUsageComponent } from './side-nav-usage/side-nav-usage.component';
import { MatIconUsageComponent } from './mat-icon-usage/mat-icon-usage.component';
import { MatSnackBarUsageComponent } from './mat-snack-bar-usage/mat-snack-bar-usage.component';
import { MatProgressBarUsageComponent } from './mat-progress-bar-usage/mat-progress-bar-usage.component';
import { MatTableUsageComponent } from './mat-table-usage/mat-table-usage.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MatCheckBoxUsageComponent,
    MatSliderToggleUsageComponent,
    MenuToolbarUsageComponent,
    SideNavUsageComponent,
    MatIconUsageComponent,
    MatSnackBarUsageComponent,
    MatProgressBarUsageComponent,
    MatTableUsageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



