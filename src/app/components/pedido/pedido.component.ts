import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { ServiceCubos } from '../../services/ServiceCubos';
import { Router } from '@angular/router';
import { Cubo } from '../../models/cubo';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrl: './pedido.component.css'
})
export class PedidoComponent implements OnInit {

  @ViewChild('idCubo') idCubo!: ElementRef;

  public cubos !: Array<Cubo>;

  constructor(private _service: ServiceCubos, private _router: Router) {

  }

  ngOnInit(): void {
    if (this._service.token == "") {
      this._router.navigate(["/"]);
    } else {
      this._service.getCubos().subscribe(response => {
        this.cubos = response;
      })
    }
  }

  realizarPedido(): void {
    let idCubo = parseInt(this.idCubo.nativeElement.value);
    this._service.comprarCubo(idCubo).subscribe(response => {
      console.log(response);
      this._router.navigate(["/compras"]);
    })
  }
}
