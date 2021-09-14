import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  caixaBox: AngularFirestoreCollection;

  constructor(private angularFirestore: AngularFirestore) { 
    this.caixaBox = this.angularFirestore.collection('Produtos');
  }  

  //Pegar os dados no Firebase
  getAllProducts(){
    return this.caixaBox.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id
          return {id, ...data}
        })
      })
    );
  }

  //Adiciona Produtos ao Firebase
  addProduct(produto){
    return this.caixaBox.add(produto);
  }

  //Deletar produtos
  delProducts(id){
    return this.caixaBox.doc(id).delete();
  }


}
