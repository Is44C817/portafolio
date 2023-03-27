import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comunicados',
  templateUrl: './comunicados.component.html',
  styleUrls: ['./comunicados.component.scss']
})
export class ComunicadosComponent implements OnInit {
  comunicadosOne: string;
  comunicadosTwo: string;
  comunicadosThree: string;
  comunicadosFour: string;
  comunicadosFive: string;
  comunicadosSix: string;

  constructor() {
    this.comunicadosOne = "https://ik.imagekit.io/isaacsanchez/comunicados/Screenshot_2023-03-27_at_13.29.34.png?updatedAt=1679945595626"
    this.comunicadosTwo = "https://ik.imagekit.io/isaacsanchez/comunicados/Screenshot_2023-03-27_at_13.29.49.png?updatedAt=1679945595074"
    this.comunicadosThree = "https://ik.imagekit.io/isaacsanchez/comunicados/Screenshot_2023-03-27_at_13.31.18.png?updatedAt=1679945594904"
    this.comunicadosFour = "https://ik.imagekit.io/isaacsanchez/comunicados/Screenshot_2023-03-27_at_13.31.38.png?updatedAt=1679945594897"
    this.comunicadosFive = "https://ik.imagekit.io/isaacsanchez/comunicados/Screenshot_2023-03-27_at_13.31.54.png?updatedAt=1679945595816"
    this.comunicadosSix = "https://ik.imagekit.io/isaacsanchez/comunicados/Screenshot_2023-03-27_at_13.32.10.png?updatedAt=1679945595295"
  }

  ngOnInit(): void {
  }

}
