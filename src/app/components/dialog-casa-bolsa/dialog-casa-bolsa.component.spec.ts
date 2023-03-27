import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCasaBolsaComponent } from './dialog-casa-bolsa.component';

describe('DialogCasaBolsaComponent', () => {
  let component: DialogCasaBolsaComponent;
  let fixture: ComponentFixture<DialogCasaBolsaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCasaBolsaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCasaBolsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
