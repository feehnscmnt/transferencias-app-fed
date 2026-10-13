import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { TransferenciaService } from '../../services/transferencia.service';
import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector:'app-agendamento',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    templateUrl:'./transferencia.agendamento.component.html'
})
export class AgendamentoComponent {

    private readonly fb = inject(FormBuilder);
    private readonly service = inject(TransferenciaService);

    @Output() salvo = new EventEmitter<any>();
    erro = ''; sucesso = '';
    enviando = false;

    form = this.fb.nonNullable.group({
        contaOrigem:['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
        contaDestino:['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
        valor:[0, [Validators.required, Validators.min(0.01)]],
        dataTransferencia:['', Validators.required]
    });

    agendar() {

        this.erro = '';
        this.sucesso = '';

        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }

        this.enviando = true;
        this.service.agendar(this.form.getRawValue()).subscribe(
            { next:r => {
                this.sucesso = `Transferência agendada com sucesso.`;
                this.form.reset({ contaOrigem:'', contaDestino:'', valor:0, dataTransferencia:'' });
                this.salvo.emit(r);
                this.enviando = false;
            },

            error:e => {
                this.erro = e.error?.mensagem || 'Nao foi possivel agendar';
                this.enviando = false;
            }

        });

    }

}