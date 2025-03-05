import { Component, Input } from '@angular/core';
import { Postagem } from '../../models/post.model'; 
import { UsuarioPostagemComponent } from '../usuario-postagem/usuario-postagem.component';
import { AcoesPostagemComponent } from '../acoes-postagem/acoes-postagem.component';

@Component({
  selector: 'app-cartao-postagem',
  standalone: true,
  imports: [UsuarioPostagemComponent, AcoesPostagemComponent],
  templateUrl: './cartao-postagem.component.html',
  styleUrl: './cartao-postagem.component.css'
})
export class CartaoPostagemComponent {
  @Input() postagem!: Postagem;
}
