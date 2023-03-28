import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFigmaComponent } from './dialog-figma.component';

describe('DialogFigmaComponent', () => {
  let component: DialogFigmaComponent;
  let fixture: ComponentFixture<DialogFigmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogFigmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFigmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
