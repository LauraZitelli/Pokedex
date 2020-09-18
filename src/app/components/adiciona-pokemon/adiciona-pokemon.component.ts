import { Component, OnInit, Input } from '@angular/core';

import { AdicionarPokemonService } from '../../services/adicionar-pokemon.service';

@Component({
  selector: 'app-adiciona-pokemon',
  templateUrl: './adiciona-pokemon.component.html',
  styleUrls: ['./adiciona-pokemon.component.css']
})
export class AdicionaPokemonComponent implements OnInit {

  constructor(private adicionarPokemonService: AdicionarPokemonService) { }

  public infosDoPokemon: any = {};

  @Input() pokemonName: string;

  ngOnInit(): void {
    this.adicionarPokemon();
  }

  adicionarPokemon(): any { // this.pokemonName é o input que vem do template de lista-pokemons
    this.adicionarPokemonService.adicionarPokemon(this.pokemonName).subscribe(data => this.infosDoPokemon.load = data);
    console.log(this.infosDoPokemon);
  }
}
