import { TransferenciaResponse } from '../../models/transferencia.response.model';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector:'app-extrato',
    standalone: true,
    imports: [
        CommonModule
    ],
    templateUrl:'./transferencia.extrato.component.html'
})
export class ExtratoComponent {
    @Input()transferencias:TransferenciaResponse[]=[];
}