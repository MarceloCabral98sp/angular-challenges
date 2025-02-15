import { Pipe, PipeTransform } from "@angular/core";
import { Usuario } from "../../components/lista-usuarios/lista-usuarios.component";

@Pipe({
    name: 'filtroUsuario'
})
export class FiltroUsuarioPipe implements PipeTransform {
    transform(usuarios: Usuario[], termoPesquisa: string): Usuario[] {
        if(!termoPesquisa) {
            return usuarios
        }

        termoPesquisa = termoPesquisa.toLowerCase();

        return usuarios.filter(usuario => 
            usuario.nome.toLowerCase().includes(termoPesquisa) ||
            usuario.email.toLowerCase().includes(termoPesquisa)
        )
    }
}