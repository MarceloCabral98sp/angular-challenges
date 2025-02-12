import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManualCreatedComponent } from './components/manual-created/manual-created.component';
import { ContadorComponent } from './components/contador/contador.component';
import { ListaTarefasComponent } from './components/lista-tarefas/lista-tarefas.component';
import { FormularioUsuarioComponent } from './components/formulario-usuario/formulario-usuario.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ManualCreatedComponent,
    ContadorComponent,
    ListaTarefasComponent,
    FormularioUsuarioComponent
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
