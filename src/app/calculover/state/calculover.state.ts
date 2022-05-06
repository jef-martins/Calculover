import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RESPOSTA } from '../model/calculover.constantes';
import { Resposta } from '../model/calculover.model';

@Injectable({
    providedIn: 'root'
})


export class CalculoverState {

    probabilidade: BehaviorSubject<Resposta> = new BehaviorSubject<Resposta>(RESPOSTA) 

    constructor (){}

    get probabilidadeCollection(): Resposta{
        return this.probabilidade.value;
    }

    get probabilidadeCollection$():BehaviorSubject<Resposta> {
        return this.probabilidade
    }

    set probabilidadeCollection(value: Resposta) {
        this.probabilidade.next(value);

    }


}