import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSugerenciasComponent } from './form-sugerencias.component';

describe('FormSugerenciasComponent', () => {
  let component: FormSugerenciasComponent;
  let fixture: ComponentFixture<FormSugerenciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormSugerenciasComponent]
    });
    fixture = TestBed.createComponent(FormSugerenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
