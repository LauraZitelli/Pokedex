import { Component, OnInit, Input } from '@angular/core';
import { AdicionarPokemonService } from '../../services/adicionar-pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  @Input() pokemonName: any;
  public infosDoPokemon: any = {};

  constructor(private adicionarPokemonService: AdicionarPokemonService) { }

  ngOnInit(): void {
  }

  displayPokemonDetail(): void {
    this.adicionarPokemonService.adicionarPokemon(this.pokemonName).subscribe(data => this.infosDoPokemon.load = data);
  }

}
