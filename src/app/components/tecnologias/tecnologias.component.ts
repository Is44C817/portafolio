import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.scss']
})
export class TecnologiasComponent implements OnInit {
  html: string;
  css: string;
  js: string;
  angular: string;
  react: string;
  type: string;
  node: string;
  express: string;
  mongo: string;
  mysql: string;
  java: string;
  lit: string;
  material: string;
  mui: string;
  bootstrap: string;
  spring: string;
  github: string;
  gitlab: string;
  bitbucket: string;
  azure: string;

  constructor() { 
    this.html = "https://ik.imagekit.io/isaacsanchez/HTML5_logo_and_wordmark.svg.png?updatedAt=1679522544925"
    this.css = "https://ik.imagekit.io/isaacsanchez/tecnologia/CSS3_logo_and_wordmark.svg.png?updatedAt=1679522781994"
    this.js = "https://ik.imagekit.io/isaacsanchez/tecnologia/JavaScript-logo.png?updatedAt=1679522973180"
    this.angular = "https://ik.imagekit.io/isaacsanchez/tecnologia/2048px-Angular_full_color_logo.svg.png?updatedAt=1679523042903"
    this.react = "https://ik.imagekit.io/isaacsanchez/tecnologia/React-icon.svg.png?updatedAt=1679523669771"
    this.type = "https://ik.imagekit.io/isaacsanchez/tecnologia/Typescript_logo_2020.svg.png?updatedAt=1679523669524"
    this.node = "https://ik.imagekit.io/isaacsanchez/tecnologia/2560px-Node.js_logo.svg.png?updatedAt=1679523669639"
    this.express = "https://ik.imagekit.io/isaacsanchez/tecnologia/Expressjs.png?updatedAt=1679523669098"
    this.mongo = "https://ik.imagekit.io/isaacsanchez/tecnologia/MongoDB-Emblem.jpg?updatedAt=1679523992276"
    this.mysql = "https://ik.imagekit.io/isaacsanchez/tecnologia/MySQL-logo.png?updatedAt=1679523992315"
    this.java = "https://ik.imagekit.io/isaacsanchez/tecnologia/226777.png?updatedAt=1679523992249"
    this.lit = "https://ik.imagekit.io/isaacsanchez/tecnologia/download.png?updatedAt=1679523992026"
    this.material = "https://ik.imagekit.io/isaacsanchez/tecnologia/download__1_.png?updatedAt=1679524581761"
    this.mui = "https://ik.imagekit.io/isaacsanchez/tecnologia/logo.png?updatedAt=1679524581899"
    this.bootstrap = "https://ik.imagekit.io/isaacsanchez/tecnologia/bootstrap-logo-3C30FB2A16-seeklogo.com.png?updatedAt=1679524582126"
    this.spring = "https://ik.imagekit.io/isaacsanchez/tecnologia/download__2_.png?updatedAt=1679524581835"
    this.github = "https://ik.imagekit.io/isaacsanchez/tecnologia/25231.png?updatedAt=1679524581790"
    this.gitlab = "https://ik.imagekit.io/isaacsanchez/tecnologia/download__3_.png?updatedAt=1679524582192"
    this.bitbucket = "https://ik.imagekit.io/isaacsanchez/tecnologia/download.jpeg?updatedAt=1679524581777"
    this.azure = "https://ik.imagekit.io/isaacsanchez/tecnologia/azure-devops-3628645-3029870.webp?updatedAt=1679524581808"
  }

  ngOnInit(): void {
  }

}
