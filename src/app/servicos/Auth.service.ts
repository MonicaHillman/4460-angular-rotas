import { Injectable, signal } from "@angular/core";

@Injectable({
    providedIn: "root",
})

export class AuthService {
    private estaAutenticado = signal<boolean>(false);

    login() {
        this.estaAutenticado.set(true)
    }

    logout() {
        this.estaAutenticado.set(false)
    }

    estaLogado() {
        return this.estaAutenticado();
    }
}