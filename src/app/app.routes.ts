import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { SeriesComponent } from './features/series/series.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
    title: 'Home',
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'series',
    component: SeriesComponent,
    title: 'Series',
  },
  {
    path: 'popularmovies/:genreTitle',
    loadComponent: () =>
      import('./features/home/component/movies-lists/movies-lists.component').then(
        (c) => c.PopularMoviesComponent
      ),
    title: 'Popular Movies',
  },
  {
    path: 'serieslists/:genreTitle',
    loadComponent: () =>
      import('./features/series/component/series-lists/series-lists.component').then(
        (c) => c.SeriesListsComponent
      ),
    title: 'Popular Movies',
  },
  {
    path: 'moviedetails/:m_id',
    loadComponent: () =>
      import('./features/movie-details/movie-details.component').then(
        (c) => c.MovieDetailsComponent
      ),
    title: 'Movie Details',
  },
];
