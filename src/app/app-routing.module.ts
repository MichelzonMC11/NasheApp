import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'asistencia1',
    loadChildren: () => import('./pages/asistencia1/asistencia1.module').then( m => m.Asistencia1PageModule)
  },
  {
    path: 'estudiante1',
    loadChildren: () => import('./pages/estudiante1/estudiante1.module').then( m => m.Estudiante1PageModule)
  },
  {
    path: 'inicio-pro',
    loadChildren: () => import('./pages/inicio-pro/inicio-pro.module').then( m => m.InicioProPageModule)
  },
  {
    path: 'perfil-alu',
    loadChildren: () => import('./pages/perfil-alu/perfil-alu.module').then( m => m.PerfilAluPageModule)
  },
  {
    path: 'perfil-docente',
    loadChildren: () => import('./pages/perfil-docente/perfil-docente.module').then( m => m.PerfilDocentePageModule)
  },
  {
    path: 'profe1',
    loadChildren: () => import('./pages/profe1/profe1.module').then( m => m.Profe1PageModule)
  },
  {
    path: 'profe2',
    loadChildren: () => import('./pages/profe2/profe2.module').then( m => m.Profe2PageModule)
  },
  {
    path: 'profe3',
    loadChildren: () => import('./pages/profe3/profe3.module').then( m => m.Profe3PageModule)
  },
  {
    path: 'regis-alu',
    loadChildren: () => import('./pages/regis-alu/regis-alu.module').then( m => m.RegisAluPageModule)
  },
  {
    path: 'regis-pro',
    loadChildren: () => import('./pages/regis-pro/regis-pro.module').then( m => m.RegisProPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
