import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  foto: string;
  presentacion: string;
  title: string;

  constructor() { 
    this.foto = "https://ik.imagekit.io/isaacsanchez/foto.jpeg?updatedAt=1679508214190"
    this.presentacion = "Hola, Soy Isaac Sánchez"
    this.title = "Tech Lead Front end | Front end developer | Back end developer | Full Stack developer | UI Design"
  }

  ngOnInit(): void {
  }

}
