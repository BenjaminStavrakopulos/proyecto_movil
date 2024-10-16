import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-bosses',
  templateUrl: './bosses.page.html',
  styleUrls: ['./bosses.page.scss'],
})
export class BossesPage {
  loading: any;
  bosses: any[] = []; // Almacena la lista de monstruos

  constructor(
    private http: HttpClient,
    private loadingController: LoadingController,
    private toastController: ToastController
  ) {
    this.loadBosses(); // Cargar los monstruos al iniciar la página
  }

  async loadBosses() {
    this.loading = await this.loadingController.create({
      message: 'Cargando monstruos...',
    });
    await this.loading.present();

    const apiUrl = 'https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters';

    this.http.get<any>(apiUrl).subscribe(
      async (response) => {
        this.bosses = response.data; // Almacena los datos de monstruos
        await this.loading.dismiss();
      },
      async (error) => {
        console.error('Error al cargar monstruos:', error);
        await this.loading.dismiss();
        this.presentToast('Error al cargar los datos de monstruos. Verifica tu conexión o la URL de la API.', 'top', 3000);
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
