import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DropOnlyShipsComponent } from './drop-only-ships/drop-only-ships.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import {AccordionModule} from "ngx-bootstrap/accordion";
import { ShipByChapterViewComponent } from './ship-by-chapter-view/ship-by-chapter-view.component';
import { ShipByMapComponent } from './ship-by-map/ship-by-map.component';

@NgModule({
  declarations: [
    AppComponent,
    DropOnlyShipsComponent,
    NavbarComponent,
    ShipByChapterViewComponent,
    ShipByMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
