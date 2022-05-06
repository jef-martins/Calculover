import { RESPOSTA } from './../../model/calculover.constantes';
import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Resposta } from '../../model/calculover.model';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})


export class ResultadoComponent implements OnInit {


  @Input() resultado: null | Resposta = RESPOSTA;

  constructor() { }


  ngOnInit(): void {


  }

}
