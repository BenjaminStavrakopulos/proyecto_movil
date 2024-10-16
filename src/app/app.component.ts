import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home' }, // Vista principal
    { title: 'Equipamiento', url: '/weapons', icon: "construct"}, // Vista weapons creada para probar :)
    { title: 'Monstruos', url: '/bosses', icon: 'skull' }, // Segunda vista creada
  ];
  
  public labels = [ "Imagenes","Jefes derrotados", "Armas encontradas"];
  constructor() {}
}
