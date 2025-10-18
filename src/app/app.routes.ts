import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { TopRatedComponent } from './features/home/component/top-rated/top-rated.component';

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
    component: TopRatedComponent,
    title: 'series',
  },
];
