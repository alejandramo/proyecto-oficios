import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { InicioComponent } from './inicio/inicio.component';
import { AppRoutingModule } from './/app-routing.module';
import { ServiciosComponent } from './servicios/servicios.component';
import { PerfilesUsuariosComponent } from './perfiles-usuarios/perfiles-usuarios.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { MapaComponent } from './mapa/mapa.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    InicioComponent,
    ServiciosComponent,
    PerfilesUsuariosComponent,
    PerfilUsuarioComponent,
    MapaComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
