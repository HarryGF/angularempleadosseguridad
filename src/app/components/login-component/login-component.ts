import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { serviceEmpleados } from '../../services/service.empleados';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-login-component',
  standalone: false,
  styleUrl: './login-component.css',
  templateUrl: './login-component.html',
})
export class LoginComponent {
  public mensaje!: string; 
  public tokentext!: string
  @ViewChild("cajaUsuario") cajaUsuario!: ElementRef
  @ViewChild("cajaContraseña") cajaContraseña!: ElementRef

  constructor( 
    private _cdr: ChangeDetectorRef,
    private _service: serviceEmpleados
  ){} 

  async login(): Promise<void> {
    let userName = this.cajaUsuario.nativeElement.value
    let password = this.cajaContraseña.nativeElement.value
    let usuario:Usuario = new Usuario(userName, password)

    let response = await this._service.login(usuario)
    this.mensaje = "Sesión iniciada correctamente"

    this._cdr.detectChanges()
  }
}
