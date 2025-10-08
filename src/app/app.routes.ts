import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

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
];
