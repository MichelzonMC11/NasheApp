import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-inicio-pro',
  templateUrl: './inicio-pro.page.html',
  styleUrls: ['./inicio-pro.page.scss'],
})
export class InicioProPage implements OnInit {
  usuIni: string = "MessiLaPulga"
  contraIni: string = "Cr7Elbicho"

  usuarioForm = new FormGroup({
    usuI: new FormControl('',[Validators.required]),
    contraI: new FormControl('',[Validators.required]),
  },
  );

  constructor(private alertController: AlertController) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Muy bien',
      message: 'Inicio Sesion Correctamente',
      buttons: ['Aceptar'],
    });

    await alert.present();
  }
  ngOnInit() {
  }

  validarDatos(){
    console.log(this.usuarioForm.value);
  }
}
