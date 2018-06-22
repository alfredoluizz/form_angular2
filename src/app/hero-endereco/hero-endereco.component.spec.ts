import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroEnderecoComponent } from './hero-endereco.component';

describe('HeroEnderecoComponent', () => {
  let component: HeroEnderecoComponent;
  let fixture: ComponentFixture<HeroEnderecoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroEnderecoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
