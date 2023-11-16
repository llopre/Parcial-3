import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaExitoComponent } from './pagina-exito.component';

describe('PaginaExitoComponent', () => {
  let component: PaginaExitoComponent;
  let fixture: ComponentFixture<PaginaExitoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaExitoComponent]
    });
    fixture = TestBed.createComponent(PaginaExitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
