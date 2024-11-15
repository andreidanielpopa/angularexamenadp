import { Cubo } from './../../models/cubo';
import { Component, OnInit } from '@angular/core';
import { ServiceCubos } from '../../services/ServiceCubos';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  public marcas !: Array<string>;

  constructor(private _service: ServiceCubos) {

  }

  ngOnInit(): void {
    this._service.getMarcasCubos().subscribe(response => {
      this.marcas = response;
    })
  }
}
