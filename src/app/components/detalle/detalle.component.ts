import { Comentario } from './../../models/comentario';
import { Cubo } from './../../models/cubo';
import { Component, OnInit } from '@angular/core';
import { ServiceCubos } from '../../services/ServiceCubos';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent implements OnInit {
  public cubo !: Cubo;
  public comentarios !: Array<Comentario>;

  constructor(private _service: ServiceCubos,
    private _activeRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      let id = parseInt(params['id']);
      this._service.findCubo(id).subscribe(response => {
        this.cubo = response;
      })
      this._service.findCuboComentarios(id).subscribe(response => {
        this.comentarios = response;
      })
    })
  }
}
