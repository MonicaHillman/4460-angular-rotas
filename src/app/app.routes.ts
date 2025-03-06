import { Routes } from '@angular/router';
import { RegistroComponent } from './paginas/registro/registro.component';
import { ListaPostagemComponent } from './paginas/lista-postagem/lista-postagem.component';

export const routes: Routes = [
    {path: "registro", component: RegistroComponent},
    {path: "posts", component: ListaPostagemComponent}
];
