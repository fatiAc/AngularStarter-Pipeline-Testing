import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCardStyle]',
  standalone: true,
})
export class CardStyleDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
}
