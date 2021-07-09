import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ConfiguracionComponent} from './pages/configuracion/configuracion.component';

const routes: Routes = [
  {
    path: '', component: ConfiguracionComponent, data: {title: 'Configuración'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
