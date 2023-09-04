import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginProfPage } from './login-prof.page';

describe('LoginProfPage', () => {
  let component: LoginProfPage;
  let fixture: ComponentFixture<LoginProfPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginProfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
