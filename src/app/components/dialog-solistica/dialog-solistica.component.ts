import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-solistica',
  templateUrl: './dialog-solistica.component.html',
  styleUrls: ['./dialog-solistica.component.scss']
})
export class DialogSolisticaComponent implements OnInit {
  solisticaImage: string;

  constructor() {
    this.solisticaImage = "https://ik.imagekit.io/isaacsanchez/solistica.png?updatedAt=1679508256246"
   }

  ngOnInit(): void {
  }

}
