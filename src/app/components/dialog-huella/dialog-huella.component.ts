import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-huella',
  templateUrl: './dialog-huella.component.html',
  styleUrls: ['./dialog-huella.component.scss']
})
export class DialogHuellaComponent implements OnInit {
  fakeOne: string;
  fakeTwo: string;
  fakeThree: string;
  fakeFour: string;
  fakeFive: string;
  fakeSix: string;
  fakeSeven: string;
  fakeEight: string;
  fakeNine: string;
  fakeTen: string;
  fakeEleven: string;

  constructor() { 
    this.fakeOne = "https://ik.imagekit.io/isaacsanchez/2.PNG?updatedAt=1679510905831"
    this.fakeTwo = "https://ik.imagekit.io/isaacsanchez/3.PNG?updatedAt=1679510906282"
    this.fakeThree = "https://ik.imagekit.io/isaacsanchez/4.PNG?updatedAt=1679510906377"
    this.fakeFour = "https://ik.imagekit.io/isaacsanchez/5.PNG?updatedAt=1679510905094"
    this.fakeFive = "https://ik.imagekit.io/isaacsanchez/6.PNG?updatedAt=1679510905333"
    this.fakeSix = "https://ik.imagekit.io/isaacsanchez/6.PNG?updatedAt=1679510905333"
    this.fakeSeven = "https://ik.imagekit.io/isaacsanchez/10.PNG?updatedAt=1679510905393"
    this.fakeEight = "https://ik.imagekit.io/isaacsanchez/11.PNG?updatedAt=1679510905127"
    this.fakeNine = "https://ik.imagekit.io/isaacsanchez/12.PNG?updatedAt=1679510905295"
    this.fakeTen = "https://ik.imagekit.io/isaacsanchez/16.PNG?updatedAt=1679510905775"
    this.fakeEleven = "https://ik.imagekit.io/isaacsanchez/17.PNG?updatedAt=1679510905903"
  }

  ngOnInit(): void {
  }

}
