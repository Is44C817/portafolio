import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-solistica',
  templateUrl: './dialog-solistica.component.html',
  styleUrls: ['./dialog-solistica.component.scss']
})
export class DialogSolisticaComponent implements OnInit {
  solisticaImage: string;
  solisticaViajes: string;
  solisticaViajesOne: string;
  solisticaViajesTwo: string;

  constructor() {
    this.solisticaImage = "https://ik.imagekit.io/isaacsanchez/solistica.png?updatedAt=1679508256246"
    this.solisticaViajes = "https://ik.imagekit.io/isaacsanchez/Screenshot_2023-03-21_at_15.30.35.png?updatedAt=1679510497880"
    this.solisticaViajesOne = "https://ik.imagekit.io/isaacsanchez/Screenshot_2023-03-21_at_15.30.47.png?updatedAt=1679510497651"
    this.solisticaViajesTwo = "https://ik.imagekit.io/isaacsanchez/Screenshot_2023-03-21_at_15.30.56.png?updatedAt=1679510497635"

   }

  ngOnInit(): void {
  }

}
