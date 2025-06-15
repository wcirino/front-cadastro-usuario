import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class SessionService {
    private readonly TOKEN_KEY = 'token';
    private readonly USER_KEY = 'SSA';

    constructor(private router: Router) { }

    salvarToken(token: string): void {
        localStorage.setItem(this.TOKEN_KEY, token);
    }

    salvarUsuario(usuario: any): void {
        localStorage.setItem(this.USER_KEY, JSON.stringify(usuario));
    }

    getToken(): string | null {
        return localStorage.getItem(this.TOKEN_KEY);
    }

    getUsuario(): any {
        const raw = localStorage.getItem(this.USER_KEY);
        return raw ? JSON.parse(raw) : null;
    }

    isLogado(): boolean {
        return !!this.getToken();
    }

    logout(): void {
        localStorage.removeItem(this.TOKEN_KEY);
        localStorage.removeItem(this.USER_KEY);
        this.router.navigate(['/login']);
    }

    isAutenticado(): boolean {
        return !!localStorage.getItem('token');
    }

}
