import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../../services/pokedex.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})

export class PokemonComponent implements OnInit {

  constructor(private pokedexService: PokedexService, private http: HttpClient) { }

  public pokemons$: Observable<any>;
  public names$: Observable<any[]>;
  public getNames$: Observable<any>;

  public pokemonData: any[] = [];
  public aux: Observable<any>;
  public index: any = 0;

  ngOnInit(): void {
    /*this.getPokemons();
    this.getPokemonsByName();
    this.getPokemonsNames();*/
    this.fetchPokemon();
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

  fetchPokemon(): any {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=1050')
      .then(response => response.json())
      .then(allPokemons => allPokemons.results.forEach(item => {
        this.fetchPokemonData(item);
      })
      );
  }

  fetchPokemonData(item): any {
    const url: string = item.url;
    fetch(url)
      .then(response => response.json())
      .then(pokemonData => this.pokemonData[pokemonData.id - 1] = pokemonData)
      .then(() => console.log(this.pokemonData));
  }

  getPokemonData(item): any {
      const url: string = item.url;
      this.http.get<any>(url).subscribe(data => this.aux = data);
  }
}

// this.pokemonData = pokemonData
