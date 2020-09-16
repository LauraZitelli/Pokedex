import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../../services/pokedex.service';
// import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  constructor(private pokedexService: PokedexService) { }

  public pokemons$: Observable<any>;
  // public id: any = 1;

  public names: string[] = [];
  public index: any = 0;

  ngOnInit(): void {
    this.getPokemons();
  }

  // método que retorna uma lista com os 1050 nomes dos Pokemons
  getPokemons(): any {
    this.pokemons$ = this.pokedexService.getPokemons();
  }

  getPokemonsName(): string[] {
    this.pokedexService.getPokemonsName().forEach(element => {
      this.names[this.index] = element;
      this.index++;
    });
    console.log(this.names);
    return this.names;
    /*this.names = this.pokedexService.getPokemonsName();
    console.log(this.names);*/
  }

}

