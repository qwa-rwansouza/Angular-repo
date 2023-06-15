import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagemComponent } from './mensagem.component';

describe('MensagemComponent', () => {
  let component: MensagemComponent;
  let fixture: ComponentFixture<MensagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensagemComponent ]
    })
    .compileComponents();
  });



  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
