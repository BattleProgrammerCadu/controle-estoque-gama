import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/Cliente';
import { ClienteService } from 'src/app/services/ClienteService';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  clientes: Cliente[] = [];
  cliente: Cliente = {} as Cliente;
  constructor() { }

  ngOnInit(): void {
  }

  add(): void{
    let newCliente: Cliente = {
      id: this.clientes.length + 1,
      nome: this.cliente.nome,
    }
    ClienteService.setUser(newCliente);
    ClienteService.add(newCliente);
  }
}
