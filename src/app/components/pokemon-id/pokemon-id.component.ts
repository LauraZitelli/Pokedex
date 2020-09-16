import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../../services/pokedex.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-id',
  templateUrl: './pokemon-id.component.html',
  styleUrls: ['./pokemon-id.component.css']
})
export class PokemonIdComponent implements OnInit {

  constructor(private pokedexService: PokedexService) { }

  public pokemonsId$: Observable<any>;
  public id: any = 1;

  ngOnInit(): void {
    //this.getPokemonsById();
  }

  /*
  getPokemonsById(): any {
    this.pokemonsId$ = this.pokedexService.getPokemonsById(this.id);
  }
  */
}
