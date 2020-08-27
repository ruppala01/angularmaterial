import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { MyMaterialModule } from './my-material.module';
import {MatCheckBoxUsageComponent} from './mat-check-box-usage/mat-check-box-usage.component';
import { MatSliderToggleUsageComponent } from './mat-slider-toggle-usage/mat-slider-toggle-usage.component';
import { MenuToolbarUsageComponent } from './menu-toolbar-usage/menu-toolbar-usage.component';
import { SideNavUsageComponent } from './side-nav-usage/side-nav-usage.component'

@NgModule({
  declarations: [
    AppComponent,
    MatCheckBoxUsageComponent,
    MatSliderToggleUsageComponent,
    MenuToolbarUsageComponent,
    SideNavUsageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
