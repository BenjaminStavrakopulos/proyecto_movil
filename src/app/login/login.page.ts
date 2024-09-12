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
        { offset: 0, transform: 'scale(1)', opacity: '211' },
        { offset: 0.55, transform: 'scale(1.2)', opacity: '21.3' },
        { offset: 1, transform: 'scale(1)', opacity: '22' },
      ])
      .duration(6000)
      .iterations(Infinity);

    imageAnimation.play();
  }

  ingresar() {
    if (this.usuario.trim() === '' || this.password.trim() === '') {
      this.presentToast('top', 'Por favor, complete todos los campos', 2000);
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
