import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('loginImage', { static: false }) loginImage: any;

  usuario: string = ''; 
  password: string = ''; 

  constructor(
    public router: Router,
    public toastController: ToastController,
    private animationCtrl: AnimationController
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.animateImage();
  }

  animateImage() {
    const imageAnimation = this.animationCtrl
      .create()
      .addElement(this.loginImage.nativeElement)
      .keyframes([
        { offset: 0, transform: 'scale(1)', opacity: '1' },
        { offset: 0.55, transform: 'scale(1.2)', opacity: '1.3' },
        { offset: 1, transform: 'scale(1)', opacity: '1' },
      ])
      .duration(6000)
      .iterations(Infinity);

    imageAnimation.play();
  }

  ingresar() {
    // Validaciones de campo vacío y longitud mínima
    if (this.usuario.trim() === '' || this.password.trim() === '') {
      this.presentToast('top', 'Por favor, complete todos los campos', 2000);
    } else if (this.usuario.length < 5) {
      this.presentToast('top', 'El usuario debe tener al menos 5 caracteres', 2000);
    } else if (this.password.length < 6) {
      this.presentToast('top', 'La contraseña debe tener al menos 6 caracteres', 2000);
    } else if (!/[A-Z]/.test(this.password)) {
      // Verifica si la contraseña tiene al menos una letra mayúscula
      this.presentToast('top', 'La contraseña debe tener al menos una letra mayúscula', 2000);
    } else if (!/\d/.test(this.password)) {
      // Verifica si la contraseña tiene al menos un número
      this.presentToast('top', 'La contraseña debe tener al menos un número', 2000);
    } else {
      this.router.navigate(['/home']);
      this.presentToast('top', 'Bienvenido');
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
