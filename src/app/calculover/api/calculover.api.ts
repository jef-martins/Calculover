import { Resposta } from '../model/calculover.model';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class CalculoverApi {

    constructor(private http: HttpClient) { }

    calcula(names: any): Observable<Resposta> {
        const url = `https://love-calculator.p.rapidapi.com/getPercentage?sname=${names.fname}&fname=${names.sname}`

        let headers = new HttpHeaders();
        headers = headers.set('X-RapidAPI-Key', '13b7bf58e2mshaf77c925d07d9fdp137bdajsn3384835bddee');
        const response = this.http.get<Resposta>(url, {headers})
        return response;

    }

   

}