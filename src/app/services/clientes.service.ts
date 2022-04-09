import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  api = environment.api;
  endpoint = 'clientes';
  constructor(private http: HttpClient) { }

  listarTodosClientes() {
    return this.http.get<ICliente[]>(`${this.api}/${this.endpoint}/`);
  }
}
