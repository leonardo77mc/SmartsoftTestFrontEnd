import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ConfiguracionComponent} from './pages/configuracion/configuracion.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'configuration',
        component: ConfiguracionComponent,
        loadChildren: () => import('./pages/configuracion/configuracion.module')
          .then(m => m.ConfiguracionModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
