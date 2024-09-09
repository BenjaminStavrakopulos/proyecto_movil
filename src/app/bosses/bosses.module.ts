import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BossesPageRoutingModule } from './bosses-routing.module';
import { BossesPage } from './bosses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BossesPageRoutingModule
  ],
  declarations: [BossesPage]
})
export class BossesPageModule {}
