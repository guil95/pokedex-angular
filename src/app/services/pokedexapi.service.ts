import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/retry'
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pokemon } from "../models/pokemon.model";

@Injectable()

export class PokedexApiService{

constructor(
    private httpClient: HttpClient
){}
    public url_api: string = 'https://pokeapi.co/api/v2/'

    public buscarPokemons<Pokemon>():Observable<Pokemon> {
        return this.httpClient.get<Pokemon>(this.url_api+'pokemon?limit=721')
    }

    public buscarPokemonsId<Pokemon>(id):Observable<Pokemon> {
        return this.httpClient.get<Pokemon>(this.url_api+'pokemon/'+id)
    }
}