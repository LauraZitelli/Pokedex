import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../../services/pokedex.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  constructor(private pokedexService: PokedexService) { }

  public pokemons$: Observable<any>;
  public names$: Observable<any[]>;
  public getNames$: Observable<any>;
  // public id: any = 1;

  ngOnInit(): void {
    this.pokedexService.getPokemons().subscribe(data => console.log(data));
    this.getPokemons();
    this.getPokemonsByName();
    this.getPokemonsNames();
  }

  // método que obtém uma lista com os 1050 nomes dos Pokemons
  getPokemons(): any {
    this.pokemons$ = this.pokedexService.getPokemons();
    // console.log(this.pokemons$);
  }

  // obtém as infos de um pokemon específico passado por parâmetro
  getPokemonsByName(): any {
    this.getNames$ = this.pokedexService.getPokemonsByName('pikachu');
  }

  // deveria obter uma string com os nomes dos pokemons
  getPokemonsNames(): any {
   this.names$ = this.pokedexService.getPokemonsNames();
   // console.log(this.names$);
   return this.names$;
  }

}

