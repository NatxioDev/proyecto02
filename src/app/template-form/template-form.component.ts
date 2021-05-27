import { Component, OnInit } from '@angular/core';

interface Trabajador {
  nombre: string;
  ci: string;
  id: number;
  area: string;
  profesion: string;
  años: number;
  salario_hora: number;
  salario_mes: number;
  seguro: string;
  sangre: string;
  estatura: number;
  peso: number;
  enfermedad: string;
  telefono: number;
  correo: string;
}

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css'],
})
export class TemplateFormComponent implements OnInit {
  constructor() {}
  trabajadores: any = [];
  tiposSangre: any = ['ORH+', 'ORH-', 'A', 'B', 'AB'];
  trabajador: Trabajador = {
    nombre: '',
    ci: '',
    id: 0,
    area: '',
    profesion: '',
    años: 0,
    salario_hora: 0,
    salario_mes: 0,
    seguro: '',
    sangre: '',
    estatura: 0,
    peso: 0,
    enfermedad: '',
    telefono: 0,
    correo: '',
    // nombre: 'Ignacio',
    // ci: '8413033',
    // id: 1545,
    // area: 'Informatica',
    // profesion: 'Ingeniero de Sistemas',
    // años: 18,
    // salario_hora: 100,
    // salario_mes: 100000,
    // seguro: 'No cuenta con seguro medico',
    // sangre: '',
    // estatura: 180,
    // peso: 70,
    // enfermedad: 'Sin enfermedades de base',
    // telefono: 69766811,
    // correo: 'ignaciopaz72@gamil.com',
  };

  submit() {
    console.log(this.trabajador);
    this.trabajadores.push(this.trabajador);
  }

  verJournals() {
    console.log(this.trabajadores);
  }

  ngOnInit(): void {}
}
