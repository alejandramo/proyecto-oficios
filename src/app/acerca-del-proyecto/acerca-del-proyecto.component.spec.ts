import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaDelProyectoComponent } from './acerca-del-proyecto.component';

describe('AcercaDelProyectoComponent', () => {
  let component: AcercaDelProyectoComponent;
  let fixture: ComponentFixture<AcercaDelProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcercaDelProyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcercaDelProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
