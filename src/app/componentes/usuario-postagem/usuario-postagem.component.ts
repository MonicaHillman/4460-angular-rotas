import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../models/post.model';

@Component({
  selector: 'app-usuario-postagem',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuario-postagem.component.html',
  styleUrls: ['./usuario-postagem.component.css']
})
export class UsuarioPostagemComponent {
  @Input() usuario!: Usuario; // 🔹 Agora 'usuario' será reconhecido no template
}
