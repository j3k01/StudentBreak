import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', // Strona główna
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'catalog', // Katalog
    loadComponent: () => import('./catalog/catalog.component').then(m => m.CatalogComponent)
  },
  {
    path: 'journey/:id',
    loadComponent: () => import('./journey-description/journey-description.component').then(m => m.JourneyDescriptionComponent)
  }
];
