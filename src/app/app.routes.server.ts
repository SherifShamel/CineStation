import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {path:'movieslists/:genreTitle',renderMode:RenderMode.Client},
  {path:'serieslists/:genreTitle',renderMode:RenderMode.Client},
  {path:'moviedetails/:m_id',renderMode:RenderMode.Client},
  {path:'seriesdetails/:m_id',renderMode:RenderMode.Client},
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
