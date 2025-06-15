import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { UserProfile } from '../model/user-profile.model';
import { UsuarioUpdate } from '../model/UsuarioUpdate';

@Injectable({
  providedIn: 'root'
})
export class usuarioService {

  private readonly BASE_URL = 'http://localhost:8055/api-usuario-dev';

  constructor(private http: HttpClient) { }

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  criarUsuario(payload: UserProfile): Observable<UserProfile> {
    return this.http.post<UserProfile>(`${this.BASE_URL}/user-profile/user-registration`, payload, {
      headers: this.getAuthHeaders()
    }).pipe(catchError(this.handleError));
  }

  atualizarUsuario(registrationNumber: number, payload: UsuarioUpdate): Observable<UserProfile> {
    return this.http.put<UserProfile>(
      `${this.BASE_URL}/user-profile/${registrationNumber}/user-registration`,
      payload,
      { headers: this.getAuthHeaders() }
    ).pipe(catchError(this.handleError));
  }

  buscarPorRegistrationNumber(registrationNumber: number): Observable<UserProfile> {
    return this.http.get<UserProfile>(
      `${this.BASE_URL}/user-profile/${registrationNumber}`,
      { headers: this.getAuthHeaders() }
    ).pipe(catchError(this.handleError));
  }

  private handleError(error: any): Observable<never> {
    console.error('Erro no UsuarioService:', error);
    const message = error.error?.message || 'Erro desconhecido.';
    return throwError(() => new Error(message));
  }
}
