import { HeroService } from '../hero.service';
import { HeroesComponent } from './heroes.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('HerosComponent (shallow tests) *******', () => {
  let fixture: ComponentFixture<HeroesComponent>;
  let mockHeroService;
  let heros;
  beforeEach(() => {
    heros = [
      { id: 1, name: 'FATIMA', strength: 1 },
      { id: 2, name: 'ZAINEB', strength: 10 },
      { id: 3, name: 'MOHAMED', strength: 55 },
    ];
    mockHeroService = jasmine.createSpyObj([
      'getHeroes',
      'addHero',
      'deleteHero',
    ]);
    TestBed.configureTestingModule({
      declarations: [HeroesComponent],
      providers: [{ provide: HeroService, useValue: mockHeroService }],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(HeroesComponent);
  });

  it('SHould set heroes list from the service ', () => {
    mockHeroService.getHeroes.and.returnValue(of(heros));
    fixture.detectChanges();
    expect(fixture.componentInstance.heroes.length).toBe(3);
  });

  it('SHould Create one li for each hero ', () => {
    mockHeroService.getHeroes.and.returnValue(of(heros));
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('li')).length).toBe(3);
  });
});
