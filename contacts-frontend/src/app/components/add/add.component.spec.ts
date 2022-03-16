import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AddComponent } from './add.component';

describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddComponent]
    })
      .compileComponents();
  });

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [AddComponent]
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  /**
   * Formulario incompleto
   */
  it('El formulario deberia ser invalido 1 solo campo', async () => {
    const fixture1 = TestBed.createComponent(AddComponent);
    const app = fixture1.componentInstance;
    fixture.detectChanges();//Detecto cambios en el formulario
    const firstName = app.contactForm.controls['firstName'];
    firstName.setValue('Pedro');
    expect(app.contactForm.invalid).toBeTrue();
  });

  /**
   * Formulario incompleto
   */
  it('El formulario deberia ser invalido 2 campos', async () => {
    const fixture1 = TestBed.createComponent(AddComponent);
    const app = fixture1.componentInstance;
    fixture.detectChanges();//Detecto cambios en el formulario
    const firstName = app.contactForm.controls['firstName'];
    firstName.setValue('Tomas');
    const lastName = app.contactForm.controls['lastName'];
    lastName.setValue('Tuchel');
    expect(app.contactForm.invalid).toBeTrue();
  });

  /**
   * Formulario Completo
   */
  it('El formulario deberia ser valido 3 campos', async () => {
    const fixture1 = TestBed.createComponent(AddComponent);
    const app = fixture1.componentInstance;
    fixture.detectChanges();//Detecto cambios en el formulario
    const firstName = app.contactForm.controls['firstName'];
    firstName.setValue('Tomasss');
    const lastName = app.contactForm.controls['lastName'];
    lastName.setValue('Tuchelss');
    const email = app.contactForm.controls['email'];
    email.setValue('toma@gmail.com');
    expect(app.contactForm.invalid).toBeFalse();//Fromulario valido
    //Todos los campos estan completos
  });

  /**
  * Formulario Completo pero el email es inavlido
  */
  it('Email erroneo', async () => {
    const fixture1 = TestBed.createComponent(AddComponent);
    const app = fixture1.componentInstance;
    fixture.detectChanges();//Detecto cambios en el formulario
    const firstName = app.contactForm.controls['firstName'];
    firstName.setValue('Tomasss');
    const lastName = app.contactForm.controls['lastName'];
    lastName.setValue('Tuchelss');
    const email = app.contactForm.controls['email'];
    email.setValue('toma@gmail');
    expect(app.contactForm.invalid).toBeTrue();//Fromulario invalido
    //El correo no cumple con el formato
  });

  /**
  * Formulario Completo firstName es invalido
  */
   it('El campo FirstName debe contener al menos 3 caracteres', async () => {
    const fixture1 = TestBed.createComponent(AddComponent);
    const app = fixture1.componentInstance;
    fixture.detectChanges();//Detecto cambios en el formulario
    const firstName = app.contactForm.controls['firstName'];
    firstName.setValue('To');
    const lastName = app.contactForm.controls['lastName'];
    lastName.setValue('Tuchelss');
    const email = app.contactForm.controls['email'];
    email.setValue('toma@gmail');
    expect(app.contactForm.invalid).toBeTrue();//Fromulario invalido
    //El Se deben ingresar al menos 3 caracteres en el campo first name
  });


  /**
  * Formulario Completo lastName es invalido
  */
   it('El campo lastName debe contener al menos 3 caracteres', async () => {
    const fixture1 = TestBed.createComponent(AddComponent);
    const app = fixture1.componentInstance;
    fixture.detectChanges();//Detecto cambios en el formulario
    const firstName = app.contactForm.controls['firstName'];
    firstName.setValue('Tomas');
    const lastName = app.contactForm.controls['lastName'];
    lastName.setValue('T');
    const email = app.contactForm.controls['email'];
    email.setValue('toma@gmail.com');
    expect(app.contactForm.invalid).toBeTrue();//Fromulario invalido
    //El Se deben ingresar al menos 3 caracteres en el campo last name
  });

});