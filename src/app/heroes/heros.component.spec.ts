import { HeroService } from '../hero.service';
import { HeroesComponent } from './heroes.component';
import { of } from 'rxjs';

describe('HerosComponent ', () => {
  let component: HeroesComponent;
  let heros;
  let mockHeroService: jasmine.SpyObj<HeroService>;

  beforeEach(() => {
    heros = [
      { id: 1, name: 'FATIMA', strength: 1 },
      { id: 2, name: 'ZAINEB', strength: 10 },
      { id: 3, name: 'MOHAMED', strength: 55 },
    ];
    mockHeroService = jasmine.createSpyObj('HeroService', [
      'getHeros',
      'addHero',
      'deleteHero',
    ]);
    component = new HeroesComponent(mockHeroService);
  });

  describe('delete', () => {
    it('Should remove the indecated hero from the heros list ', () => {
      mockHeroService.deleteHero.and.returnValue(of(heros[0]));
      component.heroes = heros;
      component.delete(heros[2]);

      expect(component.heroes.length).toBe(2);
    });

    it('Should call deleteHero ', () => {
      mockHeroService.deleteHero.and.returnValue(of(heros[0]));
      component.heroes = heros;
      component.delete(heros[2]);
      expect(mockHeroService.deleteHero).toHaveBeenCalledWith(heros[2]);
    });
  });
});
