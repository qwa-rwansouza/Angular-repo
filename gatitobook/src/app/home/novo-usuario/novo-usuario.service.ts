import { Observable } from 'rxjs';
import { NovoUsuario } from './novo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NovoUsuarioService {
  constructor(private http: HttpClient) {}

  cadastraNovoUsuario(novoUsuario: NovoUsuario): Observable<NovoUsuario> {
    return this.http.post<NovoUsuario>(
      'http://localhost:3000/user/signup',
      novoUsuario
    );
  }

  verificaUsuarioExistente (nomeDoUsuario: String) {
    return this.http.get(`http://localhost:3000/user/exists/${nomeDoUsuario}`);
  }
}
