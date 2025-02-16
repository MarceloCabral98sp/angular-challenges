import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialsPipe } from '../pipes/initials/initials.pipe';
import { FiltroUsuarioPipe } from '../pipes/filtro-usuario/filtro-usuario.pipe';

@NgModule({
  declarations: [
    InitialsPipe,
    FiltroUsuarioPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InitialsPipe,
    FiltroUsuarioPipe
  ]
})
export class SharedModule { }
