import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }
  public queryKey: any;

  ngOnInit(): void {}

  navegaListagem(searchPokemon: any): void {
    console.log('Entrou no navegaListagem: ', searchPokemon);
    this.router.navigate(['search'], { queryParams: { searchKey: searchPokemon } });
  }

}
