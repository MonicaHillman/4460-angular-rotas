import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as data from "../../db.json";
import { UsuarioPostagemComponent } from '../../componentes/usuario-postagem/usuario-postagem.component';
import { Postagem } from '../../models/post.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhes-postagem',
  templateUrl: './detalhes-postagem.component.html',
  styleUrls: ['./detalhes-postagem.component.css'],
  imports: [CommonModule, UsuarioPostagemComponent], 

})
export class DetalhesPostagemComponent implements OnInit {
  postId: string | null = null;
  post: Postagem | undefined;

  constructor(private rotaAtual: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.postId = this.rotaAtual.snapshot.paramMap.get("id");

    if (this.postId) {
      const posts: Postagem[] = data.posts;
      this.post = posts.find(post => post.id === this.postId);
    
      if (!this.post) {
        this.router.navigate(["/posts"])
      }
    }
  }
}
