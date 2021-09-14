import { Component, OnInit } from '@angular/core';
import { CrudService } from '../servicos/crud.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  estante = [];

  constructor(private crud: CrudService) {}

  ngOnInit(): void {
    this.crud.getAllProducts().subscribe(caixa => this.estante = caixa)
  }

  deletar(id){
    this.crud.delProducts(id);
  }
}
