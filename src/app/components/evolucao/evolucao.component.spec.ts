import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolucaoComponent } from './evolucao.component';

describe('EvolucaoComponent', () => {
  let component: EvolucaoComponent;
  let fixture: ComponentFixture<EvolucaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvolucaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolucaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
