import { Injectable, signal } from "@angular/core";
import { Empleado } from "../models/empleado";
import { serviceEmpleados } from "./service.empleados";

@Injectable({providedIn: 'root'})
export class ServiceAuthEmpleados {

    constructor(
        private _serivce: serviceEmpleados
    ){}

    public user = signal<Empleado | null>(null)
    
    async logInEmpleadoAsync(token: string): Promise<void> {
        sessionStorage.setItem("accessToken", token)
        let empleado = await this._serivce.getPerfilEmpleado()
        this.user.set(empleado)
    } 

    logOutEmpleado(): void {
        sessionStorage.removeItem("accessToken")
        this.user.set(null)
    }
}