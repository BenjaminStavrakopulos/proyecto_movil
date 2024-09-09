import { AnimationController, ModalController } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bosses',
  templateUrl: './bosses.page.html',
  styleUrls: ['./bosses.page.scss'],
})
export class BossesPage {
  
  modal: any; // Variable para guardar la referencia del modal

  constructor(
    private animationCtrl: AnimationController, 
    private modalCtrl: ModalController
  ) {}

  // Animación personalizada para cuando el modal se abre
  enterAnimation(baseEl: any) {
    const backdropAnimation = this.animationCtrl
      .create()
      .addElement(baseEl.querySelector('ion-backdrop')!)
      .fromTo('opacity', 0.01, 0.3);

    const wrapperAnimation = this.animationCtrl
      .create()
      .addElement(baseEl.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 1, opacity: '1', transform: 'scale(1)' },
      ]);

    return this.animationCtrl.create().addElement(baseEl).easing('ease-out').duration(500).addAnimation([backdropAnimation, wrapperAnimation]);
  }

  // Animación personalizada para cuando el modal se cierra
  leaveAnimation(baseEl: any) {
    const backdropAnimation = this.animationCtrl
      .create()
      .addElement(baseEl.querySelector('ion-backdrop')!)
      .fromTo('opacity', 0.3, 0.01);

    const wrapperAnimation = this.animationCtrl
      .create()
      .addElement(baseEl.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '1', transform: 'scale(1)' },
        { offset: 1, opacity: '0', transform: 'scale(0)' },
      ]);

    return this.animationCtrl.create().addElement(baseEl).easing('ease-in').duration(500).addAnimation([backdropAnimation, wrapperAnimation]);
  }

  // Abrir el modal y guardar la referencia
  async openModal() {
    this.modal = await this.modalCtrl.create({
      component: BossesPage, // O el componente que quieras mostrar en el modal
      enterAnimation: this.enterAnimation.bind(this),
      leaveAnimation: this.leaveAnimation.bind(this)
    });

    await this.modal.present(); // Mostrar el modal
  }

  // Función para cerrar el modal
  closeModal() {
    if (this.modal) {
      this.modal.dismiss(); // Cerrar el modal si existe
    }
  }
}
