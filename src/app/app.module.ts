import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProdutosComponent } from './components/lista-produtos/lista-produtos.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { FormsModule } from '@angular/forms'
import { FiltroUsuarioPipe } from './pipes/filtro-usuario/filtro-usuario.pipe';
import { InitialsPipe } from './pipes/initials.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListaProdutosComponent,
    ListaUsuariosComponent,
    FiltroUsuarioPipe,
    InitialsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
