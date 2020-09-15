import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../../services/pokedex.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  constructor(private pokedexService: PokedexService) { }

  public pokemons = [];
  public i = 0;

  ngOnInit(): void {
    console.log(this.pokedexService.listPokemons());
  }

  // método que retorna uma lista com os 1050 nomes dos Pokemons
  getPokemons(): any {
  }

}
// console.log(element.name);