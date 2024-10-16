import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.page.html',
  styleUrls: ['./weapons.page.scss'],
})
export class WeaponsPage {
  loading: any;
  equipment: any[] = [];

  constructor(
    private http: HttpClient,
    private loadingController: LoadingController,
    private toastController: ToastController
  ) {
    this.loadEquipment();
  }

  async loadEquipment() {
    this.loading = await this.loadingController.create({
      message: 'Cargando equipamiento...',
    });
    await this.loading.present();

    const apiUrl = 'https://botw-compendium.herokuapp.com/api/v3/compendium/category/equipment';

    this.http.get<any>(apiUrl).subscribe(
      async (response) => {
        this.equipment = response.data; // Almacena los datos de equipamiento
        await this.loading.dismiss();
      },
      async (error) => {
        console.error('Error al cargar equipamiento:', error);
        await this.loading.dismiss();
        this.presentToast('Error al cargar los datos de equipamiento. Verifica tu conexión o la URL de la API.', 'top', 3000);
      }
    );
  }

  async presentToast(message: string, position: 'top' | 'middle' | 'bottom', duration: number) {
    const toast = await this.toastController.create({
      message,
      duration,
      position,
    });
    await toast.present();
  }
}
