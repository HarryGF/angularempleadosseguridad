import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { firstValueFrom } from "rxjs";
import { Usuario } from "../models/usuario";
import { Empleado } from "../models/empleado";

@Injectable()
export class serviceEmpleados {
    constructor(private _http: HttpClient){}
    url = environment.urlApiempleados

    async login(usuario: Usuario): Promise<any> {
        let json = JSON.stringify(usuario)
        let header = new HttpHeaders().set("content-type", "application/json")
        let request = "Auth/Login"
        let response = await firstValueFrom(this._http.post<any>(this.url + request, json, {headers:header}))
        sessionStorage.setItem('accessToken', response.response)
    }

    getToken(): string | null {
        return sessionStorage.getItem('accessToken')
    }

    async getPerfilEmpleado(): Promise<Empleado> {
        let token = this.getToken();
        
        let header = new HttpHeaders().set("Authorization", "Bearer " + token);
        let request = "api/Empleados/PerfilEmpleado";

        return firstValueFrom(
            this._http.get<Empleado>(this.url + request, {headers: header})
        )
    }

    async getSubordinados(): Promise<Empleado[]> {
        let token = this.getToken()
        
        let header = new HttpHeaders().set("Authorization", "Bearer " + token)
        let request = "/api/Empleados/Subordinados"

        return firstValueFrom(
            this._http.get<Empleado[]>(this.url + request, {headers: header})
        )
    }
}