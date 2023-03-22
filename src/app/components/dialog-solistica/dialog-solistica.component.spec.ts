import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSolisticaComponent } from './dialog-solistica.component';

describe('DialogSolisticaComponent', () => {
  let component: DialogSolisticaComponent;
  let fixture: ComponentFixture<DialogSolisticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSolisticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSolisticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
