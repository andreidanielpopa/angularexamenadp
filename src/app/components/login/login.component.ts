import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceCubos } from '../../services/ServiceCubos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @ViewChild('email') email!: ElementRef;
  @ViewChild('password') password!: ElementRef;

  constructor(
    private _service: ServiceCubos,
    private _router: Router
  ) { }

  logIn(): void {
    let email = this.email.nativeElement.value;
    let password = this.password.nativeElement.value;

    this._service.getToken(email, password).subscribe(response => {
      this._service.token = response.response;
      console.log(response.response)
      this._router.navigate(['/perfil'])
    });
  }
}
