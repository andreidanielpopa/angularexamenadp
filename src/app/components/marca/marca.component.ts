import { Comentario } from './../../models/comentario';
import { Cubo } from './../../models/cubo';
import { Component, OnInit } from '@angular/core';
import { ServiceCubos } from '../../services/ServiceCubos';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrl: './marca.component.css'
})
export class MarcaComponent implements OnInit {
  public cubos!: Array<Cubo>;
  public marca!: string;

  constructor(private _service: ServiceCubos,
    private _activeRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      let marca = params['marca'];
      this.marca = marca
      this._service.findCubosByMarca(marca).subscribe(response => {
        this.cubos = response;
      })
    })
  }
}
