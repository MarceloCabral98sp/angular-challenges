import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProdutosComponent } from './components/lista-produtos/lista-produtos.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { FormsModule } from '@angular/forms'
import { FiltroUsuarioPipe } from './pipes/filtro-usuario/filtro-usuario.pipe';
import { InitialsPipe } from './pipes/initials.pipe';
import { DiscountPipe } from './pipes/discount.pipe';
import { PrecoProdutosComponent } from './components/preco-produtos/preco-produtos.component';
import { CommonModule, registerLocaleData } from '@angular/common';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import localePt from '@angular/common/locales/pt';


registerLocaleData(localePt, 'pt');


@NgModule({
  declarations: [
    AppComponent,
    ListaProdutosComponent,
    ListaUsuariosComponent,
    FiltroUsuarioPipe,
    InitialsPipe,
    DiscountPipe,
    PrecoProdutosComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    {
      provide: LOCALE_ID, useValue: 'pt'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
