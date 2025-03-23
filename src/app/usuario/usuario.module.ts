import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarUsuarioComponent } from '../components/editar-usuario/editar-usuario.component';
import { InserirUsuarioComponent } from '../components/inserir-usuario/inserir-usuario.component';
import { ListarUsuarioComponent } from '../components/listar-usuario/listar-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EditarUsuarioComponent,
    InserirUsuarioComponent,
    ListarUsuarioComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
  EditarUsuarioComponent,
  InserirUsuarioComponent,
  ListarUsuarioComponent
]
})
export class UsuarioModule { }
