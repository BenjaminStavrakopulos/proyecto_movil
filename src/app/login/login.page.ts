import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: string = '';  // Campo de usuario
  password: string = ''; // Campo de contraseña

  constructor(public router: Router, public toastController: ToastController) { }

  ngOnInit() {}

  ingresar() {
    if (this.usuario.trim() === '' || this.password.trim() === '') {
      this.presentToast("top", "Por favor, complete todos los campos", 2000);
    } else {
      this.router.navigate(['/home']);
      this.presentToast("top", "Bienvenido");
    }
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', msg: string, duration?: number) {
    const toast = await this.toastController.create({
      message: msg,
      duration: duration ? duration : 600,
      position: position,
    });
    await toast.present();
  }
}
