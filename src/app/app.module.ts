import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { DogsComponent } from './dogs/dogs.component';
import { DogCardComponent } from './dog-card/dog-card.component';
import { DogDetailsComponent } from './dog-details/dog-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DogsComponent,
    DogCardComponent,
    DogDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
