import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaSenhaLoginComponent } from './nova-senha-login.component';

describe('NovaSenhaLoginComponent', () => {
  let component: NovaSenhaLoginComponent;
  let fixture: ComponentFixture<NovaSenhaLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaSenhaLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovaSenhaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
