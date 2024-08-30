import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',  // Cambio de la pagina principal
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'weapons',
    loadChildren: () => import('./weapons/weapons.module').then(m => m.WeaponsPageModule)
  },
  {
    path: 'bosses',
    loadChildren: () => import('./bosses/bosses.module').then( m => m.BossesPageModule)
  },
  {
    path: 'bosses',
    loadChildren: () => import('./bosses/bosses.module').then(m => m.BossesPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
