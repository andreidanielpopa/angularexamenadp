import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceCubos } from '../../services/ServiceCubos';


@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrl: './compras.component.css'
})
export class ComprasComponent implements OnInit {

  public compras!: Array<any>;

  constructor(
    private _service: ServiceCubos,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    if (this._service.token == "") {
      this._router.navigate(["/"]);
    } else {

      this._service.findComprasUser().subscribe(response => {
        console.log(response);
        this.compras = response;

      })
    }
  }

}
