import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TableDataOneComponent} from './tables/table-data-one/table-data-one.component';
import {TableDataTwoComponent} from './tables/table-data-two/table-data-two.component';
import {TableDataThreeComponent} from './tables/table-data-three/table-data-three.component';

const routes: Routes = [
  {path: 'data-one', component: TableDataOneComponent, outlet: 'tables'},
  {path: 'data-two', component: TableDataTwoComponent, outlet: 'tables'},
  {path: 'data-three', component: TableDataThreeComponent, outlet: 'tables'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfiguracionRoutingModule { }
