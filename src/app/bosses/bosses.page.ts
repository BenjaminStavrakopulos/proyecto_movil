import { AnimationController, ModalController } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bosses',
  templateUrl: './bosses.page.html',
  styleUrls: ['./bosses.page.scss'],
})
export class BossesPage {
  
  modal: any; 

  constructor(
    private animationCtrl: AnimationController, 
    private modalCtrl: ModalController
  ) {}


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


 

  async openModal() {
    this.modal = await this.modalCtrl.create({
      component: BossesPage,
      enterAnimation: this.enterAnimation.bind(this),
      
    });

    await this.modal.present(); 
  }

  async closeModal() {
    if (this.modal) {
      await this.modal.dismiss();
  }
}
}

