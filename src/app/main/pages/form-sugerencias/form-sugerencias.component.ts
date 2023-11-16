import { Component, OnInit } from '@angular/core';
import { ITiposServicios } from '../../api/models/i-tiposServicios';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SugerenciasService } from '../../api/resources/sugerencias.service';
import { ITemasTipoServicio } from '../../api/models/i-temasTipoServicio';
import { ISugerencia } from '../../api/models/i-sugerencia';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-sugerencias',
  templateUrl: './form-sugerencias.component.html',
  styleUrls: ['./form-sugerencias.component.css']
})
export class FormSugerenciasComponent implements OnInit{

    //iTiposServicios: ITiposServicios[] = [{tipoServicio:$localize`Selecciona un tipo de servicio`, codTipoServicio:"default"}];
    iTiposServicios: ITiposServicios[] = [];
    defaultTipo: ITiposServicios = <ITiposServicios> {
      tipoServicio:$localize`Selecciona un tipo de servicio`, 
      codTipoServicio:''
    };

    iTemas:ITemasTipoServicio[] =  [];
    defaultTema: ITemasTipoServicio = <ITemasTipoServicio> {
      tema:$localize`Selecciona un tema`,
      codTipoServicio:"default",
      nroTema:-1
    };

    sugeForm!: FormGroup;
    submitted:boolean=false;

    iSuge!:ISugerencia;
    

    constructor(private _fb: FormBuilder,private _router: Router, private _service: SugerenciasService, private _route: ActivatedRoute ){}

    ngOnInit(): void {

      this.sugeForm = this._fb.group({
        codTipoServicio:['', [Validators.required]],
        nroTema:[-1, [Validators.required]],
        sugerencia:['', [Validators.required]]
      })

      this.cargarDatos();
    }

    cargarDatos():void{

      var tipoDefault:String="";
      var temaDefault:number=-1;

      this._route.data.subscribe((data) => {
        console.log(data["tipos"]);
        
        this.iTiposServicios = data["tipos"];
        this.iTiposServicios.unshift(this.defaultTipo);
      });

      this.iTemas = [this.defaultTema]

      this.sugeForm.controls['codTipoServicio'].setValue(tipoDefault, {onlySelf:true});
      this.sugeForm.controls['nroTema'].setValue(temaDefault, {onlySelf:true});
      this.sugeForm.controls['sugerencia'].setValue("", {onlySelf:true});
    }

    envia():void{
      this.submitted=true;
      console.log("Muestro datos seleccionados: ");
      console.log(this.sugeForm.value);

      if(this.sugeForm.controls['codTipoServicio'].errors?.['required']  && this.sugeForm.controls['nroTema'].errors?.['required']){
        this._service.putSugerencia(this.sugeForm.value).subscribe({
          next:() =>{
            console.log("inserto sugerencia");
          },
          error: (err) => {
            throw err;
          }
        });
        this._router.navigate(['exito'], { relativeTo: this._route });
      }

    }

    buscarTema():void{
      var temaDefault:number=-1;
      console.log(this.sugeForm.controls['codTipoServicio'].value);
      let codigo:string=this.sugeForm.controls['codTipoServicio'].value;

      this.iTemas = [{tema:"Selecciona un tema", codTipoServicio:"default", nroTema:-1}];

      if(this.sugeForm.controls['codTipoServicio'].value != "default"){
        this._service.getTemas({cod:codigo}).subscribe({
          next:(temas:ITemasTipoServicio[]) =>{
            console.log(temas);
          
          this.iTemas = temas;
          
          this.iTemas.unshift(this.defaultTema);
          },
          error: (err) => {
            throw err;
          }
        });
      }
      this.sugeForm.controls['nroTema'].setValue(temaDefault, {onlySelf:true});
    }
    
    cancel():void{
      this.submitted=false;
      this.cargarDatos();
    }
}
