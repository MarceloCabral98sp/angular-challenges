import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManualCreatedComponent } from './components/manual-created/manual-created.component';
import { ContadorComponent } from './components/contador/contador.component';
import { ListaTarefasComponent } from './components/lista-tarefas/lista-tarefas.component';
import { FormularioUsuarioComponent } from './components/formulario-usuario/formulario-usuario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SelecaoProdutoComponent } from './components/selecao-produto/selecao-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    ManualCreatedComponent,
    ContadorComponent,
    ListaTarefasComponent,
    FormularioUsuarioComponent,
    SelecaoProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
