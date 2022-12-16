import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtDto } from '../Model/jwt-dto';
import { LoginUsuario } from '../Model/login-usuario';
import { NuevoUsuario } from '../Model/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  //URL: "http://localhost:8080/", 
  //URL: "http://backend-production-1d85.up.railway.app/"

  URL = "https://backend-production-1d85.up.railway.app/auth/";
  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
    return this.httpClient.post<any>(this.URL+ 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.URL + 'login', loginUsuario);
  }
}
