import { HeroComponent } from './hero.component';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HeroComponent (shallow tests) ', () => {
  let fixture: ComponentFixture<HeroComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(HeroComponent);
  });

  it('Should have the correct hero ', () => {
    fixture.componentInstance.hero = { id: 1, name: 'fatima', strength: 88 };
    expect(fixture.componentInstance.hero.name).toEqual('fatima');
  });

  it('Should rendre the hero name in the anchor tag ', () => {
    fixture.componentInstance.hero = { id: 1, name: 'fatima', strength: 88 };
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('a').textContent).toContain(
      'fatima'
    );
  });
});
