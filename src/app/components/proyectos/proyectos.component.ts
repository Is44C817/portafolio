import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ComunicadosComponent } from '../comunicados/comunicados.component';
import { DialogCasaBolsaComponent } from '../dialog-casa-bolsa/dialog-casa-bolsa.component';
import { DialogHuellaComponent } from '../dialog-huella/dialog-huella.component';
import { DialogSolisticaComponent } from '../dialog-solistica/dialog-solistica.component';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialogSolistica() {
    const dialogRef = this.dialog.open(DialogSolisticaComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogHuella() {
    const dialogRef = this.dialog.open(DialogHuellaComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogCasa() {
    const dialogRef = this.dialog.open(DialogCasaBolsaComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogComunicados() {
    const dialogRef = this.dialog.open(ComunicadosComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
