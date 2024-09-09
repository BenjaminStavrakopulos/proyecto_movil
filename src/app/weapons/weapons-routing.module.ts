import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeaponsPage } from './weapons.page';

const routes: Routes = [
  {
    path: '',
    component: WeaponsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeaponsPageRoutingModule {}
