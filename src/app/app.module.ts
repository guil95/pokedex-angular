import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {InterceptorHttp} from './services/InterceptorHttp.service';
import {DetalhesService} from './services/detalhes.service';
import {PokedexApiService} from './services/pokedexapi.service';

import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { DetalhesComponent } from './detalhes/detalhes.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { Search } from './util/search.pipe'

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    DetalhesComponent,
    Search
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
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
