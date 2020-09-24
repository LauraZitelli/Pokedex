import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  searchPokemon: any = '';

  searchChangedHandler(event: any): any {
    this.searchPokemon = event;
    console.log('searchPokemon agora vale:');
    console.log(this.searchPokemon);
  }

}
