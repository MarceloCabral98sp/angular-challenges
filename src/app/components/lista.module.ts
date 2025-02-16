import { NgModule } from "@angular/core";
import { ListaProdutosComponent } from "./lista-produtos/lista-produtos.component";
import { ListaUsuariosComponent } from "./lista-usuarios/lista-usuarios.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared/shared.module";

@NgModule({
    declarations: [
        ListaProdutosComponent,
        ListaUsuariosComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule
    ],
    exports: [
        ListaProdutosComponent,
        ListaUsuariosComponent
    ]
})
export class ListaModule { }