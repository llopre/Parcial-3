import { Injectable } from '@angular/core';
import { IResourceMethodObservable, Resource, ResourceAction, ResourceHandler, ResourceParams, ResourceRequestBodyType, ResourceRequestMethod, ResourceResponseBodyType } from '@ngx-resource/core';
import { ITiposServicios } from '../models/i-tiposServicios';
import { environment } from 'src/environments/environment';
import { ITemasTipoServicio } from '../models/i-temasTipoServicio';
import { ISugerencia } from '../models/i-sugerencia';

@Injectable()

@ResourceParams({ 
  pathPrefix: `${environment.apiUrl}/coments`
})
export class SugerenciasService extends Resource {

  constructor(handler?: ResourceHandler) {
    super(handler);
  }

  @ResourceAction({
    method: ResourceRequestMethod.Get,
    path: '/tiposservicios',
    responseBodyType: ResourceResponseBodyType.Json
  })
  getTiposServicios!: IResourceMethodObservable<void,ITiposServicios[]>;

  @ResourceAction({
    method: ResourceRequestMethod.Post,
    path: '/temastiposervicio',
    requestBodyType: ResourceRequestBodyType.FORM_DATA,
    responseBodyType: ResourceResponseBodyType.Json
  })
  getTemas!: IResourceMethodObservable<{cod:String},ITemasTipoServicio[]>;

  @ResourceAction({
    path:'/sugerencia',
    method: ResourceRequestMethod.Put,
    requestBodyType: ResourceRequestBodyType.JSON
  })
  putSugerencia!:IResourceMethodObservable<ISugerencia,void>;

}
