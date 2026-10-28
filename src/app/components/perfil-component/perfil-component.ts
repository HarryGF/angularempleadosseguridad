import { ChangeDetectorRef, Component } from '@angular/core';
import { serviceEmpleados } from '../../services/service.empleados';
import { Empleado } from '../../models/empleado';

@Component({
  selector: 'app-perfil-component',
  standalone: false,
  styleUrl: './perfil-component.css',
  templateUrl: './perfil-component.html',
})
export class PerfilComponent {
  public empleado!: Empleado

  constructor( 
    private _cdr: ChangeDetectorRef,
    private _service: serviceEmpleados
  ){} 

  async cargarPerfil(): Promise<void>{

  }
}
