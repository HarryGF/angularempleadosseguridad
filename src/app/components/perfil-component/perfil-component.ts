import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { serviceEmpleados } from '../../services/service.empleados';
import { Empleado } from '../../models/empleado';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-component',
  standalone: false,
  styleUrl: './perfil-component.css',
  templateUrl: './perfil-component.html',
})
export class PerfilComponent implements OnInit{
  public empleado!: Empleado

  constructor( 
    private _cdr: ChangeDetectorRef,
    private _service: serviceEmpleados,
    private _router: Router
  ){} 

  async ngOnInit(): Promise<void>{
    if(!sessionStorage.getItem('accessToken')){
      this._router.navigate(['/'])
    }
    this.empleado = await this._service.getPerfilEmpleado()
    this._cdr.detectChanges()
  }
}
