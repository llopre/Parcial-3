import { ResolveFn } from '@angular/router';
import { ITiposServicios } from '../api/models/i-tiposServicios';
import { SugerenciasService } from '../api/resources/sugerencias.service';
import { inject } from '@angular/core';

export const tiposServiciosResolver: ResolveFn<ITiposServicios[]> = (route, state) => {
  return inject(SugerenciasService).getTiposServicios();
};
