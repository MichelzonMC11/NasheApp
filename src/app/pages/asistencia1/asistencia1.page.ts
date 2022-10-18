import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-asistencia1', 
  templateUrl: './asistencia1.page.html',
  styleUrls: ['./asistencia1.page.scss'],
})
export class Asistencia1Page implements OnInit {

  porcentaje0 : number = 0.20;
  porcentaje1 : number = 0.69;
  porcentaje2 : number = 0.50;
  porcentaje3 : number = 0.31;
  porcentaje4 : number = 0.27;

  constructor(private alertController: AlertController) { }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Asistencia',
      message: 'La Asistencia se guardo correctamente',
      buttons: ['Aceptar'],
    });

    await alert.present();
  }
  ngOnInit() {
  }

}
