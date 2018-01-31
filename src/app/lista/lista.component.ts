import { Component, OnInit, Injectable } from '@angular/core';
import { PokedexApiService } from '../services/pokedexapi.service'
import { DetalhesService } from '../services/detalhes.service'
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})

@Injectable()
export class ListaComponent implements OnInit {
  public pokemons: Pokemon[]
  constructor(
    private pokedexApiService: PokedexApiService,
    private detalhesService: DetalhesService
  ) { }

  ngOnInit() {
    this.pokedexApiService.buscarPokemons().subscribe(ret => {
     
      this.pokemons = ret['results']
      console.log(this.pokemons)
        }, (err) => {
      console.log(err)
    })
  }

  public mostrarDetalhe(pokemon, url, id){
    this.detalhesService.populaDetalhe(pokemon, url, id)
  }


}
