import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {InterceptorHttp} from './services/InterceptorHttp.service';
import {DetalhesService} from './services/detalhes.service';
import {PokedexApiService} from './services/pokedexapi.service';

import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { DetalhesComponent } from './detalhes/detalhes.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    DetalhesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    DetalhesService,
    PokedexApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorHttp,
      multi: true,
    },
    InterceptorHttp
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
