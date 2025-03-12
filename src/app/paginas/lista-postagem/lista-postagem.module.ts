import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListaPostagemComponent } from './lista-postagem.component';

const rotas: Routes = [
  {
    path: "", component: ListaPostagemComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(rotas)
  ]
})
export class ListaPostagemModule { }
