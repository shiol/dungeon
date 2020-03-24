import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-monstro',
  templateUrl: './monstro.component.html',
  styleUrls: ['./monstro.component.css']
})
export class MonstroComponent implements OnInit {

  public vida: number;

  constructor() {
    this.vida = Math.round(Math.random() * 100);
  }

  ngOnInit(): void {
  }

}
