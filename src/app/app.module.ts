import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MastheadComponent } from './feature/masthead/masthead.component';
import { SearchComponent } from './feature/search/search.component';
import { HomepageComponent } from './feature/homepage/homepage.component';
import { FirstSectionComponent } from './feature/first-section/first-section.component';
import { CardComponent } from './shared/card/card.component';
import { SecondSectionComponent } from './feature/second-section/second-section.component';
import { TrendingsComponent } from './feature/trendings/trendings.component';
import { MovieDetailComponent } from './feature/movie-detail/movie-detail.component';
import { SearchCardComponent } from './shared/search-card/search-card.component';
import { CardDetailComponent } from './shared/card-detail/card-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MastheadComponent,
    SearchComponent,
    HomepageComponent,
    FirstSectionComponent,
    CardComponent,
    SecondSectionComponent,
    TrendingsComponent,
    MovieDetailComponent,
    SearchCardComponent,
    CardDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
