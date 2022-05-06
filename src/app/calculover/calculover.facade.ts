import { RESPOSTA } from './model/calculover.constantes';
import { CalculoverState } from './state/calculover.state';
import { CalculoverApi } from './api/calculover.api';
import { Injectable } from '@angular/core';
import { Names, Resposta } from './model/calculover.model';


@Injectable({
    providedIn: 'root'
})

export class CalculoverFacade {
    

    probabilidade$ = this.state.probabilidade;

    constructor(
        private state: CalculoverState,
        private api: CalculoverApi
    ){}

   
    getProbabilidade(names: Names) {
        this.api.calcula(names).subscribe(((res: Resposta) => {
            this.state.probabilidadeCollection = res;
        }))
    }

}
