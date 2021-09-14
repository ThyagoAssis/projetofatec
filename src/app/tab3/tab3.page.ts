import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  formularioEdit: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.verificaForm();
   }
 
   verificaForm(){
     this.formularioEdit = this.formBuilder.group({
       nome: ['', [Validators.required, Validators.minLength(3)]],
       tipo: ['',[Validators.required, Validators.minLength(3)]]
     })
   }
 
   cadastrar(){
     console.log(this.formularioEdit.value);
   }
}
