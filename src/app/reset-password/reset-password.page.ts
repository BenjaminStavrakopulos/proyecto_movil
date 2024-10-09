import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage {
  email: string = ''; 

  constructor(private toastController: ToastController, private router: Router) {}

  validateEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  async enviarSolicitud() {
    if (this.email.trim() === '') {
      const toast = await this.toastController.create({
        message: 'Por favor, ingresa tu correo electrónico.',
        duration: 2000,
        position: 'top',
      });
      await toast.present();
      return;
    }

    if (!this.validateEmail(this.email)) {
      const toast = await this.toastController.create({
        message: 'Por favor, ingresa un correo electrónico válido.',
        duration: 2000,
        position: 'top',
      });
      await toast.present();
      return;
    }

    const toast = await this.toastController.create({
      message: 'Se ha enviado un enlace para restablecer tu contraseña.',
      duration: 2000,
      position: 'top',
    });
    await toast.present();

    this.router.navigate(['/']);
  }
}
