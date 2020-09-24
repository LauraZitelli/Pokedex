import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Output() searchChanged: EventEmitter<string> = new EventEmitter();

  public searchPokemon: any = '';

  ngOnInit(): void {

  }

  onSave(valor: any): any {
    this.searchPokemon = valor;
    this.searchChanged.emit(this.searchPokemon);
    console.log('rodou o método onSave do header');
    // console.log(this.searchPokemon);
  }

}
