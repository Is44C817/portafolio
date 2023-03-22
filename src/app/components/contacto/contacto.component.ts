import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  contacto: string;
  cotactame: string;
  creado: string;
  hrefGithub: string;
  hrefLinkedin: string;
  svgGithub: string;
  svgLinkedin: string;

  constructor() {
    this.contacto = "Contacto";
    this.cotactame = "Contáctame para inciar tu proyecto y/o aplicación y haré que tu visión se vuelva realidad";
    this.creado = "Creado por Isaac Sánchez (2023) ©";
    this.hrefGithub = "https://github.com/Is44C817"
    this.hrefLinkedin = "https://www.linkedin.com/in/isaac-s%C3%A1nchez-2a14a792/"
    this.svgGithub = "../../../assets/github.svg"
    this.svgLinkedin = "../../../assets/linkedin.svg"
   }

  ngOnInit(): void {
  }

}
