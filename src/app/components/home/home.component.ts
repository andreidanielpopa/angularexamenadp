import { Cubo } from './../../models/cubo';
import { Component, OnInit } from '@angular/core';
import { ServiceCubos } from '../../services/ServiceCubos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  public cubos !: Array<Cubo>;

  constructor(private _service: ServiceCubos) {

  }

  ngOnInit(): void {
    this._service.getCubos().subscribe(response => {
      this.cubos = response;
    })
  }
}
