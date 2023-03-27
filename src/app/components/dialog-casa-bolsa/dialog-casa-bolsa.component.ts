import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-casa-bolsa',
  templateUrl: './dialog-casa-bolsa.component.html',
  styleUrls: ['./dialog-casa-bolsa.component.scss']
})
export class DialogCasaBolsaComponent implements OnInit {
  bolsaOne: string;
  bolsaTwo: string;
  bolsaThree: string;
  bolsaFour: string;
  bolsaFive: string;
  bolsaSix: string;

  constructor() {
    this.bolsaOne = "https://ik.imagekit.io/isaacsanchez/casaBolsa/Screenshot_2023-03-27_at_12.51.07.png?updatedAt=1679943714168";
    this.bolsaTwo = "https://ik.imagekit.io/isaacsanchez/casaBolsa/Screenshot_2023-03-27_at_12.51.22.png?updatedAt=1679943713769"
    this.bolsaThree = "https://ik.imagekit.io/isaacsanchez/casaBolsa/Screenshot_2023-03-27_at_12.51.34.png?updatedAt=1679943713762"
    this.bolsaFour = "https://ik.imagekit.io/isaacsanchez/casaBolsa/Screenshot_2023-03-27_at_12.52.37.png?updatedAt=1679943714035"
    this.bolsaFive = "https://ik.imagekit.io/isaacsanchez/casaBolsa/Screenshot_2023-03-27_at_12.54.31.png?updatedAt=1679943713992"
    this.bolsaSix = "https://ik.imagekit.io/isaacsanchez/casaBolsa/Screenshot_2023-03-27_at_12.55.19.png?updatedAt=1679943714184"
   }

  ngOnInit(): void {
    
  }

}
