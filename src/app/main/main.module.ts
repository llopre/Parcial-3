import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSugerenciasComponent } from './pages/form-sugerencias/form-sugerencias.component';
import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SugerenciasService } from './api/resources/sugerencias.service';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginaExitoComponent } from './pages/pagina-exito/pagina-exito.component';




@NgModule({
  declarations: [
    HomeComponent,
    FormSugerenciasComponent,
    PaginaExitoComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule
  ],
  providers:[SugerenciasService]
})
export class MainModule { }
