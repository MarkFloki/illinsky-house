import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';   
import { AppComponent } from './app.component';
import { ApartmentListComponent } from './components/apartment-list/apartment-list.component';
import { ApartmentCardComponent } from './components/apartment-card/apartment-card.component';
import { FilterComponent } from './components/filter/filter.component';
import { ApartmentService } from './services/apartment.service';


@NgModule({
  declarations: [
    AppComponent,
    ApartmentListComponent,
    ApartmentCardComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ ApartmentService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
