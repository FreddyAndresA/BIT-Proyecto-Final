import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisPeliculasComponent } from './mis-peliculas.component';

describe('MisPeliculasComponent', () => {
  let component: MisPeliculasComponent;
  let fixture: ComponentFixture<MisPeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisPeliculasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
