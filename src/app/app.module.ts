import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { AppRoutingModule } from './/app-routing.module';
import { FacturacionComponent } from './facturacion/facturacion.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { ClienteServiceService } from './Servicios/cliente-service.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PiePaginaComponent,
    FacturacionComponent,
    ListaClientesComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ClienteServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
