import { Component, OnInit,} from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder} from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-regis-pro',
  templateUrl: './regis-pro.page.html',
  styleUrls: ['./regis-pro.page.scss'],
})
export class RegisProPage implements OnInit {

  validarNom = "^[a-zA-Z]+$";
  validarCon = /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[a-zA-Z]).{8,16}$/;
  validarRut =/^\d{7,8}[-]{1}[Kk\d]{1}$/gm;

  registroForm: FormGroup;
  valueFromuser:any;
  
  constructor(public toastController: ToastController, private router: Router,private alertController: AlertController) { }


  
  ngOnInit() {
    this.registroForm=new FormGroup({
      nombre: new FormControl('',[
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(12),
      ]),

      apellido:new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ]),

      contrasena:new FormControl('',[
        Validators.required, 
        Validators.minLength(8), 
        Validators.maxLength(16)
      ]),

      recontrasena:new FormControl('',[
        Validators.required, 
        Validators.minLength(8), 
        Validators.maxLength(16)
      ]),

      telefono:new FormControl('',[
        Validators.required, 
        Validators.max(99999999), 
        Validators.min(10000000)
      ]),

      rut:new FormControl('',[
        Validators.required, 
        Validators.max(999999999), 
        Validators.min(100000000)
      ]),

      correo:new FormControl('',[
        Validators.required,
        Validators.email

      ])

    });
  }

  guardarDatos(){
    console.log(this.registroForm.value);
  }

  pasoDatos(){
    let navigationExtras: NavigationExtras = {
      state:{
        nombre: this.registroForm.value.nombre,
        apellido: this.registroForm.value.apellido,
        correo: this.registroForm.value.correo,
        rut: this.registroForm.value.rut,
        telefono: this.registroForm.value.telefono        
      }
    }
    this.router.navigate(['/profe1'], navigationExtras);
  }
  
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Muy bien',
      message: 'Registrado Correctamente',
      buttons: ['Aceptar'],
    });

    await alert.present();
  }
}