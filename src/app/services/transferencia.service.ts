import { TransferenciaResponse } from '../models/transferencia.response.model';
import { TransferenciaRequest } from '../models/transferencia.request.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class TransferenciaService {
    
    private readonly urlAgendar = 'http://localhost:8080/transferencias-app-bff/v1/transferencias/agendar';
    private readonly urlListar = 'http://localhost:8080/transferencias-app-bff/v1/transferencias/listar';
    constructor(private readonly http:HttpClient){}

    listar():Observable<TransferenciaResponse[]> { 
        return this.http.get<TransferenciaResponse[]>(this.urlListar);
    }

    agendar(dados:TransferenciaRequest):Observable<TransferenciaRequest> {
        return this.http.post<TransferenciaRequest>(this.urlAgendar, dados);
    }

}