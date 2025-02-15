import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { StatusPedidoComponent } from './components/status-pedido/status-pedido.component';
import { ListaTarefasComponent } from './components/lista-tarefas/lista-tarefas.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    ProdutosComponent,
    StatusPedidoComponent,
    ListaTarefasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
