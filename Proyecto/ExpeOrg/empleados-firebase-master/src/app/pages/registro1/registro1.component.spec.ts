import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroComponent1 } from './registro1.component';

describe('Registro1Component', () => {
  let component: RegistroComponent1;
  let fixture: ComponentFixture<RegistroComponent1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroComponent1 ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroComponent1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
