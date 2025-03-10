import { Routes } from '@angular/router';
import { RegistroComponent } from './paginas/registro/registro.component';
import { ListaPostagemComponent } from './paginas/lista-postagem/lista-postagem.component';
import { AuthGuard } from './guards/auth.guard';
import { LayoutComponent } from './componentes/layout/layout.component';
export const routes: Routes = [
    {path: "registro", component: RegistroComponent},
    {
        path: "",
        component: LayoutComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: "posts", component: ListaPostagemComponent
            }
        ]
    }
];
