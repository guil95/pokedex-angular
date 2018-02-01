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
  public filtro: string
  constructor(
    private pokedexApiService: PokedexApiService,
    private detalhesService: DetalhesService
  ) { }

  ngOnInit() {
    this.pokedexApiService.buscarPokemons().subscribe(ret => {
      ret['results'].forEach(i => {
        let id = i.url.match(/([\d]+)\/$/)
        i.id = id[1]
    
      })
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
