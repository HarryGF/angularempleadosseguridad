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
import { AuthGuard } from './guards/auth-guard';

@NgModule({
  declarations: [App, LoginComponent, MenuComponent, PerfilComponent, SubordinadosComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    AuthGuard,
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    serviceEmpleados
  ],
  bootstrap: [App],
})
export class AppModule {}
