import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { LoginComponent } from './components/login-component/login-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { PerfilComponent } from './components/perfil-component/perfil-component';
import { SubordinadosComponent } from './components/subordinados-component/subordinados-component';
import { provideHttpClient } from '@angular/common/http';
import { serviceEmpleados } from './services/service.empleados';
import { authGuard } from './guards/auth-guard';
import { EjemploSignalComponent } from './components/ejemplo-signal-component/ejemplo-signal-component';

@NgModule({
  declarations: [
    App,
    LoginComponent,
    MenuComponent,
    PerfilComponent,
    SubordinadosComponent,
    EjemploSignalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    serviceEmpleados,
  ],
  bootstrap: [App],
})
export class AppModule {}
