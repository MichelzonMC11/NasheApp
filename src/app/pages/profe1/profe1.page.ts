import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-profe1',
  templateUrl: './profe1.page.html',
  styleUrls: ['./profe1.page.scss'],
})
export class Profe1Page implements OnInit {
  nombre : string = " ";
  apellido : string= " ";

  constructor(private router: Router, private activedRouter: ActivatedRoute) {
    this.activedRouter.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation().extras.state){
        this.nombre = this.router.getCurrentNavigation().extras.state.nombre;
        this.apellido = this.router.getCurrentNavigation().extras.state.apellido;
      }
    })
   }

  ngOnInit() {
  }

}
