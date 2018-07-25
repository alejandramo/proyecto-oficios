import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ServiciosComponent } from './servicios/servicios.component';






const routes : Routes =[ 
{path: 'inicio', component:InicioComponent },
{path: 'nav-bar', component:NavBarComponent },
{path: 'servicios', component:ServiciosComponent }
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
