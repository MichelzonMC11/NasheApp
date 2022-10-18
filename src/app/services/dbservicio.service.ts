import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { AlertController, Platform } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DbservicioService {
  //Creacion de tablas
  tablaRol: string = "CREATE TABLE IF NOT EXISTS rol(id_rol INTEGER PRIMARY KEY autoincrement,nombre VARCHAR(50) NOT NULL);";
  tablaUsuario: string = "CREATE TABLE IF NOT EXISTS usuario(id_usuario INTEGER PRIMARY KEY autoincrement,rut VARCHAR(30),nombre VARCHAR(50),apellidos VARCHAR(50),correo VARCHAR(50),clave VARCHAR(50),fk_id_rol INTEGER,foreign key(fk_id_rol)references rol(id_rol));";
  tablaAsignatura: string = "CREATE TABLE IF NOT EXISTS asignatura(id_asignatura INTEGER PRIMARY KEY autoincrement,sigla VARCHAR(10),nombre VARCHAR(50));";
  tablaSeccion: string = "CREATE TABLE IF NOT EXISTS seccion(id_seccion INTEGER PRIMARY KEY autoincrement,sigla VARCHAR(10));";
  tablaAsig_Secc: string = "CREATE TABLE IF NOT EXISTS asig_secc(id_asig_secc INTEGER PRIMARY KEY autoincrement,fk_id_asignatura,fk_id_seccion,fk_id_usuario INTEGER,foreign key(fk_id_asignatura)references asignatura(id_asignatura),foreign key(fk_id_seccion)references seccion(id_seccion),foreign key(fk_id_usuario)references usuario(id_usuario));";
  tablaListado: string = "CREATE TABLE IF NOT EXISTS listado(id_listado INTEGER PRIMARY KEY autoincrement,status VARCHAR(15),fk_id_usuario,fk_id_asig_secc INTEGER,foreign key(fk_id_usuario)references usuario(id_usuario),foreign key(fk_id_asig_secc)references asig_secc(id_asig_secc));";
  tablaAsistencia: string = "CREATE TABLE IF NOT EXISTS asistencia(id_asistencia INTEGER PRIMARY KEY autoincrement, fecha DATE, qr BLOB, hora_inicio VARCHAR(50), hora_fin VARCHAR(50),fk_id_asig_secc INTEGER,foreign key(fk_id_asig_secc)references asig_secc(id_asig_secc));";
  tablaDetalle_Asist: string = "CREATE TABLE IF NOT EXISTS detalle_asist(id_detalle INTEGER PRIMARY KEY autoincrement,status VARCHAR(30),fk_id_asistencia,fk_id_usuario INTEGER,foreign key(fk_id_asistencia)references asistencia(id_asistencia),foreign key(fk_id_usuario)references usuario(id_usuario));";
  //variable que manipule la conexion a BD
  public database: SQLiteObject;

  //variables para observables
  listaUsuario = new BehaviorSubject([]);
  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private sqlite: SQLite, private platform: Platform, private alertController: AlertController) {
    this.crearBD();
  }


  //Alertaaaaaaaaaaaaaaa
  async presentAlert(msj: string) {
    const alert = await this.alertController.create({
      header: 'Importante',
      message: msj,
      buttons: ['OK'],
    });

    await alert.present();
  }

  crearBD() {
    //verificamos que la plataforma este lista
    this.platform.ready().then(() => {
      //creamos la BD
      this.sqlite.create({
        name: 'bdAsistencia.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        this.database = db;
        //llamar a la funcion para crear las tablas
        this.crearTablas();
      }).catch(e => {
        this.presentAlert("Error creación BD: " + e);
      })


    })
  }

  async crearTablas() {
    try {
      //Ejectuto creacion de tablas
      await this.database.executeSql(this.tablaRol, []);
      this.presentAlert("creación Tabla Rol perfecto: ");
      await this.database.executeSql(this.tablaUsuario, []);
      this.presentAlert("creación Tabla Usuario perfecto: " );
      await this.database.executeSql(this.tablaAsignatura, []); 
      this.presentAlert(" creación Tabla Asignatura perfecto: " );
      await this.database.executeSql(this.tablaSeccion, []);
      this.presentAlert(" creación Tabla Seccion Perfecto: " );
      await this.database.executeSql(this.tablaAsig_Secc, []);
      this.presentAlert(" creación Tabla AsigSecc Perfecto: " );
      await this.database.executeSql(this.tablaListado, []);
      this.presentAlert(" creación Tabla Listado Perfecto: " );
      await this.database.executeSql(this.tablaAsistencia, []);
      this.presentAlert(" creación Tabla Asistencia Perfecto: " );
      await this.database.executeSql(this.tablaDetalle_Asist, []);
      this.presentAlert(" creación Tabla detalle Asistencia Perfecto: " );
      


      //modificar el observable de el status de la BD
      this.isDBReady.next(true);

    }
    catch (e) {
      this.presentAlert("Error creación Tabla: " + e);
    }
  }

  dbState() {
    return this.isDBReady.asObservable();
  }
}
