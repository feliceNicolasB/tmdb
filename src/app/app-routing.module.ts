import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './feature/homepage/homepage.component';
import { MovieDetailComponent } from './feature/movie-detail/movie-detail.component';
import { SearchComponent } from './feature/search/search.component';

const routes: Routes = [
 { path: '', redirectTo:'home', pathMatch: 'full'},
 { path: 'home', component: HomepageComponent},
 { path: 'home/:query', component: SearchComponent},
 { path: ':movie_id', component: MovieDetailComponent},
 { path: '**', component: HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
