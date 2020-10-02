import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  // @Output() searchChanged: EventEmitter<string> = new EventEmitter();

  // public searchPokemon: any = '';
  public queryKey: any;

  ngOnInit(): void {

  }

  /*
  onSave(valor: any): any {
    this.queryKey = valor;
    // this.searchChanged.emit(this.searchPokemon);
    console.log('rodou o método onSave do header, agora queryKey vale:');
    console.log(this.queryKey);
  }
  */
  navegaListagem(searchPokemon: any): void {
    console.log('Entrou no navegaListagem: ', searchPokemon);
    this.router.navigate(['search'], { queryParams: { searchKey: searchPokemon } });
  }

}
