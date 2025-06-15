import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, of, throwError } from "rxjs";
import { Login } from "../model/login";
import { LoginResponseDTO } from "../model/LoginResponseDTO";
import { SolicitarResetSenhaDTO } from "../model/SolicitarResetSenhaDTO";
import { TokenReponseDTO } from "../model/TokenReponseDTO";
import { ResetarSenhaDTO } from "../model/ResetarSenhaDTO";
import { RecuperarLoginDTO } from "../model/RecuperarloginDTO";
import { ApiResponseDTO } from "../model/ApiResponseDTO";
import { SistemaComStatusDTO } from "../model/SistemaComStatusDTO";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class AuthService {
private readonly BASE_URL = 'http://localhost:8055/api-login-dev';

constructor(private http: HttpClient) { }

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  login(payload: Login): Observable<LoginResponseDTO> {
    return this.http.post<LoginResponseDTO>(`${this.BASE_URL}/auth/signin`, payload).pipe(
      catchError(this.handleError)
    );
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  logoutBackend(): Observable<void> {
    return this.http.post<void>(`${this.BASE_URL}/auth/logout`, {}, {
      headers: this.getAuthHeaders()
    }).pipe(catchError(this.handleError));
  }

  validarToken(): Observable<boolean> {
    return this.http.post(`${this.BASE_URL}/auth/validar-token`, {}, {
      headers: this.getAuthHeaders()
    }).pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }

  solicitarTokenAndCode(dto: SolicitarResetSenhaDTO): Observable<TokenReponseDTO> {
    return this.http.post<TokenReponseDTO>(`${this.BASE_URL}/reset-senha/solicitar-code`, dto).pipe(
      catchError(this.handleError)
    );
  }

  resetarSenhaComCode(dto: ResetarSenhaDTO): Observable<ApiResponseDTO> {
    return this.http.post<ApiResponseDTO>(`${this.BASE_URL}/reset-senha/resetar-code-senha`, dto);
  }

  recuperarLogin(dto: RecuperarLoginDTO): Observable<LoginResponseDTO> {
    return this.http.post<LoginResponseDTO>(`${this.BASE_URL}/usuario/recuperar-login`, dto).pipe(
      catchError(this.handleError)
    );
  }

  getSistemasPorUsuario(registrationNumber: number): Observable<SistemaComStatusDTO[]> {
    return this.http.get<SistemaComStatusDTO[]>(
      `${this.BASE_URL}/sistemas/por-usuario/${registrationNumber}`,
      { headers: this.getAuthHeaders() }
    ).pipe(catchError(this.handleError));
  }

  private handleError(error: any): Observable<never> {
    console.error('Erro no AuthService:', error);
    const message = error.error?.message || 'Erro desconhecido.';
    return throwError(() => new Error(message));
  }
}
