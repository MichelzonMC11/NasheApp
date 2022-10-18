import { Component, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource,MatTreeFlattener } from '@angular/material/tree';

interface FoodNode{
  name:string;
  children?:FoodNode[];
}

interface ExampleFlatNode{
  expandable:boolean;
  name:string;
  level:number;
}
const TREE_DATA: FoodNode[] =[
  {
    name: 'Secciones-001D',
    children: [{name: 'Asistencia'}, {name:'Archivos'}, {name:'Notas'}],
  },
  {
    name: 'Seccion-002D',
    children: [{name: 'Asistencia'}, {name:'Archivos'}, {name:'Notas'}],
  },
  {
    name: 'Seccion-003D',
    children: [{name: 'Asistencia'}, {name:'Archivos'}, {name:'Notas'}],
  },
  {
    name: 'Seccion-004D',
    children: [{name: 'Asistencia'}, {name:'Archivos'}, {name:'Notas'}],
  },
  {
    name: 'Seccion-005D',
    children: [{name: 'Asistencia'}, {name:'Archivos'}, {name:'Notas'}],
  },
  {
    name: 'Seccion-006D',
    children: [{name: 'Asistencia'}, {name:'Archivos'}, {name:'Notas'}],
  },
  
];


@Component({
  selector: 'app-profe2',
  templateUrl: './profe2.page.html',
  styleUrls: ['./profe2.page.scss'],
})
export class Profe2Page implements OnInit {
  private _transformer = (node: FoodNode, level:number) =>{
    return{
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };
  constructor(){
    this.dataSource.data = TREE_DATA;
  }
  treeControl=new FlatTreeControl<ExampleFlatNode>(
    node=>node.level,
    node=>node.expandable
  );
  treeFlattener=new MatTreeFlattener(
    this._transformer,
    node=>node.level,
    node=>node.expandable,
    node=>node.children
  );

  dataSource=new MatTreeFlatDataSource(
    this.treeControl,this.treeFlattener
  )
  hasChild=(_: number, node:ExampleFlatNode)=> node.expandable;
  ngOnInit() {
  }
}
