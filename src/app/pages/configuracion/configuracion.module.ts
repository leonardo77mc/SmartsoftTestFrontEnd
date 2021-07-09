import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ConfiguracionRoutingModule} from './configuracion-routing.module';
import {ConfiguracionComponent} from './configuracion.component';
import {HttpClientModule} from '@angular/common/http';
import {GridModule} from '@progress/kendo-angular-grid';
import {DropDownListModule, DropDownsModule} from '@progress/kendo-angular-dropdowns';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TableDataOneComponent} from './tables/table-data-one/table-data-one.component';
import {TableDataTwoComponent} from './tables/table-data-two/table-data-two.component';
import {TableDataThreeComponent} from './tables/table-data-three/table-data-three.component';
import { TablesComponent } from './tables/tables/tables.component';


@NgModule({
  declarations: [
    ConfiguracionComponent,
    TableDataOneComponent,
    TableDataTwoComponent,
    TableDataThreeComponent,
    TablesComponent
  ],
  imports: [
    CommonModule,
    ConfiguracionRoutingModule,
    HttpClientModule,
    GridModule,
    DropDownListModule,
    DropDownsModule,
    GridModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class ConfiguracionModule {
}
