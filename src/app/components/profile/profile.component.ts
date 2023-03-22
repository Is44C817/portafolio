import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  foto: string;

  constructor() { 
    this.foto = "https://ik.imagekit.io/isaacsanchez/foto.jpeg?updatedAt=1679508214190"
  }

  ngOnInit(): void {
  }

}
