import { Injectable } from '@angular/core';
import { Cliente } from '../Modelo/cliente';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ClienteServiceService {
  private clienteURL = 'http://localhost:8080/cliente/';
  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.clienteURL);
  }

  getCliente(codigoCliente: number): Observable<Cliente> {
    return this.http.get<Cliente>(this.clienteURL + codigoCliente);
  }

}
