import { ResultadoComponent } from './../resultado/resultado.component';
import { RESPOSTA } from './../../model/calculover.constantes';
import { Resposta } from './../../model/calculover.model';
import { Component, EventEmitter, Injectable, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Names } from '../../model/calculover.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-calculover',
  templateUrl: './calculover.component.html',
  styleUrls: ['./calculover.component.css']
})


export class CalculoverComponent implements OnInit {

  erro: string = '';
  formName!: FormGroup;
  @Output() onSubmit: EventEmitter<Names> = new EventEmitter();
  @Input() resultado: any | Resposta = RESPOSTA;

  @ViewChild('defaultTabButtons') template!: TemplateRef<any>;
  modal!: BsModalRef;


  constructor(
    private fb: FormBuilder,
    private modalService: BsModalService
  ) { }

  teste() {
    this.modal = this.modalService.show(this.template);
  }


  ngOnInit(): void {
    this.formName = this.fb.group({
      fname: ['', Validators.required],
      sname: ['', Validators.required]
    });
  }


  recarrega() {
    setTimeout("location.reload(true);", 5);
  }


  enviarNomes() {
    console.log(this.formName.controls['fname'].valid);
    if (!this.formName.get('fname')?.errors)
      this.erro = 'campo vazio'
    console.log('enviarNomes')
    this.onSubmit.emit(this.formName.value);

  }

  traduzir(percentage: number) {
    if (percentage < 50) {
       return "Impossível, pode ser melhor da outra vez"
    }else{
      return "Ai sim"
    }
  }


}

