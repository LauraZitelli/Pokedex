import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

import { AdicionarPokemonService } from '../../services/adicionar-pokemon.service';


@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit, OnDestroy {

  constructor(private adicionarPokemonService: AdicionarPokemonService, private route: ActivatedRoute) {}

  key: any;
  inscricao: Subscription;
  public pokemonDetail: any = {};

  ngOnInit(): void {
    console.log('route.params: ');
    console.log(this.route.params);
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.key = params.key;
      }
    ), this.displayPokemonDetail(this.key); // arrumar
    console.log('valor da key: ');
    console.log(this.key);
  }

  displayPokemonDetail(key: any): void {
    const takeOne = this.adicionarPokemonService.adicionarPokemon(key).pipe(take(1));
    takeOne.subscribe(data => this.pokemonDetail.load = data);
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

}
