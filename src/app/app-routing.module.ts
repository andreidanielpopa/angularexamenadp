import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { MarcaComponent } from './components/marca/marca.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ComprasComponent } from './components/compras/compras.component';
import { PedidoComponent } from './components/pedido/pedido.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'detalles/:id', component: DetalleComponent
  },
  {
    path: 'cubos/:marca', component: MarcaComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'perfil', component: PerfilComponent
  },
  {
    path: 'compras', component: ComprasComponent
  },
  {
    path: 'pedido', component: PedidoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
