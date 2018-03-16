import { NgModule } from '@angular/core';
import { FacturacionComponent } from './facturacion/facturacion.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';

import { RouterModule, Routes } from '@angular/router';

const rutas: Routes = [
  {
    path: 'facturacion',
    component: FacturacionComponent
  },
  {
    path: 'clientes',
    component: ListaClientesComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(rutas)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
