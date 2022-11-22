import { Injectable } from "@angular/core";
import { Cliente } from "../models/Cliente";


@Injectable({
    providedIn: 'root'
  }) 

export class ClienteService{
    private static clienteList: Cliente[] = [];

    public static user: Cliente = {} as Cliente;

    public static list(): Cliente[]{
        return this.clienteList;
    }

    public static add(cliente: Cliente): void{
        this.clienteList.push(cliente);
    }
    
    public static setUser(cliente: Cliente) {
        this.user = cliente;
    }

    public static getUser(): Cliente{
        return this.user;
    }
}