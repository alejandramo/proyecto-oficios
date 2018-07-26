import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilesUsuariosComponent } from './perfiles-usuarios.component';

describe('PerfilesUsuariosComponent', () => {
  let component: PerfilesUsuariosComponent;
  let fixture: ComponentFixture<PerfilesUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilesUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilesUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
