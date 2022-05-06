
import { Component, OnInit } from '@angular/core';
import { CalculoverFacade } from '../../calculover.facade';
import { CalculoverState } from '../../state/calculover.state';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  constructor(
    public facade: CalculoverFacade,
    public state: CalculoverState
  ) { }

  ngOnInit(): void {
    
  }

  calcular(event: any) {
    this.facade.getProbabilidade(event)
  }

}
