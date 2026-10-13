import { AgendamentoComponent } from './components/agendamento/transferencia.agendamento.component';
import { ExtratoComponent } from './components/extrato/transferencia.extrato.component';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app';

@NgModule({
    imports:[AppComponent, AgendamentoComponent, ExtratoComponent, BrowserModule, ReactiveFormsModule],
    bootstrap:[AppComponent, AgendamentoComponent, ExtratoComponent],
    providers:[provideHttpClient()]
})
export class AppModule {}