import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take, first } from 'rxjs/operators';

import { AdicionarPokemonService } from '../../services/adicionar-pokemon.service';


@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  constructor(private adicionarPokemonService: AdicionarPokemonService, private route: ActivatedRoute) {}

  key: any;
  public pokemonDetail: any = {};

  ngOnInit(): void {
    console.log('route.params: ');
    console.log(this.route.params);

    const firstData = this.route.params.pipe(first());
    firstData.subscribe(
      (params: any) => {
        this.key = params.key;
        this.displayPokemonDetail(this.key);
      },
    );
    console.log('valor da key: ');
    console.log(this.key);
  }

  displayPokemonDetail(key: any): void {
    const takeOne = this.adicionarPokemonService.adicionarPokemon(key).pipe(take(1));
    takeOne.subscribe(data => this.pokemonDetail.load = data);
  }

}
