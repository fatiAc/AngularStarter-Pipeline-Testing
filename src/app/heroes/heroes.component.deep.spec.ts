import { HeroService } from '../hero.service';
import { HeroesComponent } from './heroes.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Directive, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { HeroComponent } from '../hero/hero.component';

@Directive({
  selector: 'routerLink',
  host: { '(click)': 'onClick()' },
})
export class RouterLinkDirectiveStub {
  @Input('routerLink') linkParams: any;
  navigatedTo: any = null;

  onClick() {
    this.navigatedTo = this.linkParams;
  }
}
describe('HerosComponent (deep tests) ', () => {
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
      declarations: [HeroesComponent, HeroComponent, RouterLinkDirectiveStub],
      providers: [{ provide: HeroService, useValue: mockHeroService }],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(HeroesComponent);
  });

  it('Should render each hero as HeroComponent ', () => {
    mockHeroService.getHeroes.and.returnValue(of(heros));
    fixture.detectChanges();

    // run ngOnInit
    let heroComponentDes = fixture.debugElement.queryAll(
      By.directive(HeroComponent)
    );
    expect(heroComponentDes.length).toBe(3);
    expect(heroComponentDes[0].componentInstance.hero.name).toEqual('FATIMA');
  });

  it(`Should call HeroService.deleteHero when the Hero component's delete button is clicked`, () => {
    spyOn(fixture.componentInstance, 'delete');
    mockHeroService.getHeroes.and.returnValue(of(heros));
    fixture.detectChanges();

    const heroComponents = fixture.debugElement.queryAll(
      By.directive(HeroComponent)
    );
    (<HeroComponent>heroComponents[0].componentInstance).delete.emit(undefined);
    expect(fixture.componentInstance.delete).toHaveBeenCalledWith(heros[0]);
  });

  it('should add a new hero to the hero list when the add button clicked', () => {
    mockHeroService.getHeroes.and.returnValue(of(heros));
    fixture.detectChanges();

    let name = 'Khadija';
    mockHeroService.addHero.and.returnValue(
      of({ id: 5, name: name, strength: 66 })
    );
    const inputElement = fixture.debugElement.query(
      By.css('input')
    ).nativeElement;
    const addButton = fixture.debugElement.queryAll(By.css('button'))[0];
    inputElement.value = name;

    addButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    const heroText = fixture.debugElement.query(By.css('ul')).nativeElement
      .textContent;

    expect(heroText).toContain(name);
  });

  it('Should get the correct route for the first hero ', () => {
    mockHeroService.getHeroes.and.returnValue(of(heros));
    fixture.detectChanges();
    const heroComponents = fixture.debugElement.queryAll(
      By.directive(HeroComponent)
    );

    // let routerLink = heroComponents[0]
    //  .query(By.directive(RouterLinkDirectiveStub))
    //   .injector.get(RouterLinkDirectiveStub);
    //  heroComponents[0].query(By.css('a')).triggerEventHandler('click', null);
    //   expect(routerLink.navigatedTo).toBe('/details/1');
  });
});
