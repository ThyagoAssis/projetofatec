import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../servicos/crud.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private crudService: CrudService) {}
  
  ngOnInit(): void {
   this.verificaForm();
  }

  verificaForm(){
    this.formulario = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      tipo: ['',[Validators.required, Validators.minLength(3)]],
      quantidade: ['', [Validators.required, Validators.maxLength(5)]]
    })
  }

  cadastrar(){
    this.crudService.addProduct(this.formulario.value);
  }



}
