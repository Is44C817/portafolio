import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogHuellaComponent } from './dialog-huella.component';

describe('DialogHuellaComponent', () => {
  let component: DialogHuellaComponent;
  let fixture: ComponentFixture<DialogHuellaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogHuellaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogHuellaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
