import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioPostagemComponent } from '../../componentes/usuario-postagem/usuario-postagem.component';
import { Postagem } from '../../models/post.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhes-postagem',
  templateUrl: './detalhes-postagem.component.html',
  styleUrls: ['./detalhes-postagem.component.css'],
  imports: [CommonModule, UsuarioPostagemComponent], 

})
export class DetalhesPostagemComponent {
  postId: string | null = null;
  post: Postagem | undefined;

  constructor(private rotaAtual: ActivatedRoute, private router: Router) {
    this.post = this.rotaAtual.snapshot.data["post"];

    if (!this.post) {
      this.router.navigate(["/posts"]);
    }
  }

 
}
