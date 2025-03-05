import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Estatisticas } from '../../models/post.model';

@Component({
  selector: 'app-acoes-postagem',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './acoes-postagem.component.html',
  styleUrls: ['./acoes-postagem.component.css']
})
export class AcoesPostagemComponent {
  @Input() estatisticas!: Estatisticas;
}
