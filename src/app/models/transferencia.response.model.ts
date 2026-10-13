export interface TransferenciaResponse {
    id:number;
    contaOrigem:string;
    contaDestino:string;
    valor:number;
    taxa:number;
    valorTotal:number;
    dataTransferencia:string;
    dataAgendamento:string;
}