import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioAlumPage } from './inicio-alum.page';

describe('InicioAlumPage', () => {
  let component: InicioAlumPage;
  let fixture: ComponentFixture<InicioAlumPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InicioAlumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
