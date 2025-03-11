import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as data from "../../db.json";
import { UsuarioPostagemComponent } from '../../componentes/usuario-postagem/usuario-postagem.component';

@Component({
  selector: 'app-detalhes-postagem',
  templateUrl: './detalhes-postagem.component.html',
  styleUrls: ['./detalhes-postagem.component.css'],
  imports: [CommonModule, UsuarioPostagemComponent], 

})
export class DetalhesPostagemComponent {

}
