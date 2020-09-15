import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../../services/pokedex.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  public pokemons = [];
  public i = 0;

  constructor(private pokedexService: PokedexService) { }

  ngOnInit(): void {
    // console.log(this.pokedexService.listPokemons());
  }

  listByName(): string[] {
    const pokemons: string[] = this.pokedexService.listPokemons();
    const nomePokemons = 0;
    return;
  }
}
