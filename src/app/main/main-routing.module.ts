import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormSugerenciasComponent } from './pages/form-sugerencias/form-sugerencias.component';
import { HomeComponent } from './pages/home/home.component';
import { tiposServiciosResolver } from './resolvers/tipos-servicios.resolver';
import { PaginaExitoComponent } from './pages/pagina-exito/pagina-exito.component';


const routes: Routes = [
    { path: '', component: HomeComponent, children: [
      { path: '', component: FormSugerenciasComponent, resolve:{tipos:tiposServiciosResolver} },
      { path: 'exito', component: PaginaExitoComponent }
    ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MainRoutingModule { }