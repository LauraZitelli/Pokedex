import { Component, OnInit, Input } from '@angular/core';
import { ObterEvolucaoService } from '../../services/obter-evolucao.service';

@Component({
  selector: 'app-evolucao',
  templateUrl: './evolucao.component.html',
  styleUrls: ['./evolucao.component.css']
})
export class EvolucaoComponent implements OnInit {

  @Input() id: any;
  public cadeiaEvolucao: any = {};

  constructor(private obterEvolucaoService: ObterEvolucaoService) { }

  ngOnInit(): void {
    this.obterEvolucao(this.id);
    console.log('Id: ');
    console.log(this.id);
    console.log(this.cadeiaEvolucao);
  }

  obterEvolucao(id: any): void {
    if (id % 3 === 1) {
      id = id + 2;
    } else {
      if (id % 3 === 2){
        id = id + 1;
      }
    }
    id = id / 3;
    this.obterEvolucaoService.obterEvolucao(id).subscribe(data => this.cadeiaEvolucao.load = data.chain);
  }
}
