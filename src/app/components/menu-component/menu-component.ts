import { Component, inject, Inject } from '@angular/core';
import { serviceSignal } from '../../services/service.signal';
import { ServiceAuthEmpleados } from '../../services/service.auth.empleados';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html',
})
export class MenuComponent {
  private _serviceSignal: serviceSignal = inject(serviceSignal)
  private _serviceAuth: ServiceAuthEmpleados =
    inject(ServiceAuthEmpleados)
  public usuario = this._serviceAuth.user
  public contador = this._serviceSignal.contador

  logOutEmpleado(): void {
    this._serviceAuth.logOutEmpleado()
  }
}
