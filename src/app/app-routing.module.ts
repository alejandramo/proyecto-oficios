import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { InicioComponent } from './inicio/inicio.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { MapaComponent } from './mapa/mapa.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { PerfilesUsuariosComponent } from './perfiles-usuarios/perfiles-usuarios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { BusquedaComponent } from './busqueda/busqueda.component';



const routes : Routes =[ 
{path: 'nav-bar', component:NavBarComponent },
{path: 'inicio', component:InicioComponent },
{path: 'servicios', component:ServiciosComponent },
{path: 'mapa', component:MapaComponent },
{path: 'perfil-usuario', component:PerfilUsuarioComponent },
{path: 'perfiles-usuarios', component:PerfilesUsuariosComponent },
{path: 'contacto', component:ContactoComponent },
{path: 'busqueda', component:BusquedaComponent },
]  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
 /* imports: [
    CommonModule
  ],
  declarations: []
})
*/

export class AppRoutingModule { }
