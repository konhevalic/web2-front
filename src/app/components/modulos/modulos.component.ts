import { Component, OnInit } from '@angular/core';
import * as mod1 from "../../modulo1";

enum DiaSemana {
  Domingo = 0,
  Segunda = 1,
  Terça = 2,
  Quarta = 3,
  Quinta = 4,
  Sexta = 5,
  Sábado = 6
}

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrl: './modulos.component.css'
})
export class ModulosComponent implements OnInit {
  label: string = mod1.texto;

  mediaCalculada: number = 0;
  diaSemana: number = 5

  ngOnInit() {
    this.media();
    this.obterDiaSemana(this.diaSemana)
  }

  calcularMedia(...notas: number[]): number {
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    return soma / notas.length;
  }

  media(): void {
    this.mediaCalculada = this.calcularMedia(5, 9.5, 7)
  }

  obterDiaSemana(dia: number): string {
    switch (dia) {
        case DiaSemana.Domingo:
            return "Domingo";
        case DiaSemana.Segunda:
            return "Segunda-feira";
        case DiaSemana.Terça:
            return "Terça-feira";
        case DiaSemana.Quarta:
            return "Quarta-feira";
        case DiaSemana.Quinta:
            return "Quinta-feira";
        case DiaSemana.Sexta:
            return "Sexta-feira";
        case DiaSemana.Sábado:
            return "Sábado";
        default:
            return "Dia inválido";
    }
}

}
