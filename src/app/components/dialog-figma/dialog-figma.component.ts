import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-figma',
  templateUrl: './dialog-figma.component.html',
  styleUrls: ['./dialog-figma.component.scss']
})
export class DialogFigmaComponent implements OnInit {
  figmaFive: string;
  figmaOne: string;
  figmaTwo: string;
  figmaThree: string;
  figmaFour: string;

  constructor() {
    this.figmaOne = "https://ik.imagekit.io/isaacsanchez/Figma/Screenshot_2023-03-28_at_16.29.16.png?updatedAt=1680042925384"
    this.figmaTwo = "https://ik.imagekit.io/isaacsanchez/Figma/Screenshot_2023-03-28_at_16.30.08.png?updatedAt=1680042925664"
    this.figmaThree = "https://ik.imagekit.io/isaacsanchez/Figma/Screenshot_2023-03-28_at_16.29.51.png?updatedAt=1680042925659"
    this.figmaFour = "https://ik.imagekit.io/isaacsanchez/Figma/Screenshot_2023-03-28_at_16.29.26.png?updatedAt=1680042925445"
    this.figmaFive = "https://ik.imagekit.io/isaacsanchez/Figma/Screenshot_2023-03-28_at_16.29.43.png?updatedAt=1680042925405"
  }

  ngOnInit(): void {
  }

}
