import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceCubos } from '../../services/ServiceCubos';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit {

  public usuario!: Usuario;

  constructor(
    private _service: ServiceCubos,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    if (this._service.token == "") {
      this._router.navigate(["/"]);
    } else {

      this._service.getPerfilUserToken().subscribe(response => {
        console.log(response);
        this.usuario = response;

      })
    }
  }

}
