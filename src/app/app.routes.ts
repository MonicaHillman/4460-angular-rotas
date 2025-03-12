import { Routes } from '@angular/router';
import { RegistroComponent } from './paginas/registro/registro.component';
import { ListaPostagemComponent } from './paginas/lista-postagem/lista-postagem.component';
import { AuthGuard } from './guards/auth.guard';
import { LayoutComponent } from './componentes/layout/layout.component';
import { DetalhesPostagemComponent } from './paginas/detalhes-postagem/detalhes-postagem.component';
import { postResolver } from './resolvers/post.resolver';

export const routes: Routes = [
    {path: "registro", component: RegistroComponent},
    {
        path: "",
        component: LayoutComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: "posts", 
                loadChildren: () => import("./paginas/lista-postagem/lista-postagem.module")
                .then(modulo => modulo.ListaPostagemModule)
            },
            {
                path: "posts/:id", component: DetalhesPostagemComponent, resolve: { post: postResolver }
            }
        ]
    }
];
