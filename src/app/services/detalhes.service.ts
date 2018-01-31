import { Injectable } from '@angular/core';
import { PokedexApiService } from '../services/pokedexapi.service'
import { Pokemon } from '../models/pokemon.model';

@Injectable()
export class DetalhesService{
    pokemon: any = {};
    public mostrarDetalhe: boolean

    constructor(
        private pokedexApiService: PokedexApiService
    ){}

    public populaDetalhe(pokemon, url, id){
        
        this.pokedexApiService.buscarPokemonsId(id).subscribe((ret: any) => {
                console.log(ret.id)
                this.pokemon.name = ret.name.toUpperCase()
                this.pokemon.id = ret.id
                this.pokemon.url = url

                if(ret.types[1] != undefined){
                    this.pokemon.tipo2 = ret.types[1].type.name.toUpperCase()
                }

                this.pokemon.tipo1 = ret.types[0].type.name.toUpperCase()

                this.pokemon.statsValor1 = ret.stats[0].base_stat
                this.pokemon.statsValor2 = ret.stats[1].base_stat
                this.pokemon.statsValor3 = ret.stats[2].base_stat
                this.pokemon.statsValor4 = ret.stats[3].base_stat
                this.pokemon.statsValor5 = ret.stats[4].base_stat
                this.pokemon.statsValor6 = ret.stats[5].base_stat

                this.pokemon.statsName1 = ret.stats[0].stat.name.toUpperCase()
                this.pokemon.statsName2 = ret.stats[1].stat.name.toUpperCase()
                this.pokemon.statsName3 = ret.stats[2].stat.name.toUpperCase()
                this.pokemon.statsName4 = ret.stats[3].stat.name.toUpperCase()
                this.pokemon.statsName5 = ret.stats[4].stat.name.toUpperCase()
                this.pokemon.statsName6 = ret.stats[5].stat.name.toUpperCase()

                this.mostrarDetalhe = true
              }, (err) => {
            console.log(err)
          })
    }
}