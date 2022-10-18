import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Usuario } from '../modelos/usuarios';
import { ApiService } from '../services/api.service';
import { DbservicioService } from '../services/dbservicio.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usuIni: string = "MessiLaPulga"
  contraIni: string = "Cr7Elbicho"
  usuarios: Usuario[] = [];

  usuarioForm = new FormGroup({
    usuI: new FormControl('',[Validators.required]),
    contraI: new FormControl('',[Validators.required]),
  },
  );

  constructor(private alertController: AlertController,private apiUsuario: ApiService,private Database: DbservicioService) { }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Muy bien',
      message: 'Inicio Sesion Correctamente',
      buttons: ['Aceptar'],
    });

    await alert.present();


  }
  ngOnInit() {
    this.apiUsuario.cargarUsuarios().subscribe(data=>{
      this.usuarios=data
    })
  }

  validarDatos(){
    console.log(this.usuarioForm.value);
  }

}
