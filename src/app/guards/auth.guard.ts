import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "../servicos/Auth.service";
import { inject } from "@angular/core";

export const AuthGuard: CanActivateFn = () => {
    const authService = inject(AuthService)
    const router = inject(Router);

    if (!authService.estaLogado())  {
        router.navigate(["/registro"])
        return false;
    }

    return true;
}