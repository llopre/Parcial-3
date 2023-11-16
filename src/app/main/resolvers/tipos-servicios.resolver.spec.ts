import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { tiposServiciosResolver } from './tipos-servicios.resolver';

describe('tiposServiciosResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => tiposServiciosResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
