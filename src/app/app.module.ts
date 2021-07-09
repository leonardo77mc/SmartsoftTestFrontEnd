import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ConfiguracionModule} from './pages/configuracion/configuracion.module';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {ConfigurationState} from './core/store/configuration/configuration.state';
import {Settings} from './core/config/settings';
import {NgxsModule} from '@ngxs/store';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ConfiguracionModule,
    NgxsModule.forRoot([
      ConfigurationState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
   // NgxsLoggerPluginModule.forRoot(),
  ],
  providers: [Settings],
  bootstrap: [AppComponent]
})
export class AppModule { }
