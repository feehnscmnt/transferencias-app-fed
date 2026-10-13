import { AgendamentoComponent } from './components/agendamento/transferencia.agendamento.component';
import { ExtratoComponent } from './components/extrato/transferencia.extrato.component';
import { TransferenciaResponse } from './models/transferencia.response.model';
import { TransferenciaService } from './services/transferencia.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector:'app-root',
  standalone: true,
  imports: [
    AgendamentoComponent,
    ExtratoComponent,
    CommonModule
  ],
  template:`<main>
              <h1>Agenda de Transferências</h1>
              <app-agendamento (salvo)="adicionarNaLista($event)"></app-agendamento>
              <app-extrato [transferencias]="transferencias"></app-extrato>
            </main>`
})
export class AppComponent implements OnInit {

  transferencias:TransferenciaResponse[]=[];

  constructor(private readonly service:TransferenciaService){}
  
  ngOnInit() {
    this.carregar();
  }
  
  carregar() {
    this.service.listar().subscribe(v => this.transferencias = v);
  }
  
  adicionarNaLista(novaTransferencia: any) {
    this.transferencias = [...this.transferencias, novaTransferencia];
  }

}