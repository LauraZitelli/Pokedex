import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionaPokemonComponent } from './adiciona-pokemon.component';

describe('AdicionaPokemonComponent', () => {
  let component: AdicionaPokemonComponent;
  let fixture: ComponentFixture<AdicionaPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionaPokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionaPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
