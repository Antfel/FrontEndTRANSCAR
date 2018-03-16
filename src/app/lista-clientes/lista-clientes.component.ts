import { Component, OnInit } from '@angular/core';
import { Cliente } from '../Modelo/cliente';
import { ClienteServiceService } from '../Servicios/cliente-service.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {
  listaClientes: Cliente[];
  constructor(private clienteService: ClienteServiceService) {

  }

  ngOnInit() {
    this.getClientes();
  }

  getClientes() {
    this.clienteService.getClientes()
          .subscribe(clientes => this.listaClientes = clientes);
  }

}
