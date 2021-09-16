import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../servicos/crud.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  idRoute = null;
  productOne = {};

  constructor(private activatedRoute: ActivatedRoute, private crudService: CrudService) {}

  ngOnInit(): void {
    this.idRoute = this.activatedRoute.snapshot.params['id'];

    if (this.idRoute) {
      this.crudService.getProduct(this.idRoute).subscribe(carrinho => {this.productOne = carrinho});
    }     
  }

  update(forms){
    this.crudService.updateProduct(this.idRoute, forms.value);
    console.log(forms.value);
  }

 
}
