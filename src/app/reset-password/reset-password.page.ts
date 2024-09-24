import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage {
  constructor(private toastController: ToastController, private router: Router,private navCtrl: NavController) {}
  goBack() {
    this.navCtrl.back();  
  }
  async enviarSolicitud() {
    const toast = await this.toastController.create({
      message: 'Se ha enviado un enlace para restablecer tu contraseña.',
      duration: 2000,
      position: 'top',
    });
    await toast.present();

    this.router.navigate(['/']); 
  }
}
