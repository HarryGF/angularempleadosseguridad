import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { serviceEmpleados } from '../../services/service.empleados';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-subordinados-component',
  standalone: false,
  styleUrl: './subordinados-component.css',
  templateUrl: './subordinados-component.html',
})
export class SubordinadosComponent  implements OnInit{
  public listaSubordinados!: Empleado[]

  constructor( 
    private _cdr: ChangeDetectorRef,
    private _service: serviceEmpleados,
    private _router: Router
  ){} 

  async ngOnInit(): Promise<void> {
    if(!sessionStorage.getItem('accessToken')){
      this._router.navigate(['/'])
    }
    this.listaSubordinados = await this._service.getSubordinados()
    this._cdr.detectChanges()
  }
}
