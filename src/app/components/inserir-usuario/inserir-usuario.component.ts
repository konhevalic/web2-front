import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-inserir-usuario',
  templateUrl: './inserir-usuario.component.html',
  styleUrl: './inserir-usuario.component.css'
})
export class InserirUsuarioComponent {
  inserirUsuario = new FormControl("")
}
