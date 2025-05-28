import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMostrarNomeCompleto]',
})
export class MostrarNomeCompletoDirective {
  @Input('appMostrarNomeCompleto') fullText: string = '';

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    
  }
  @HostListener('mouseover') onmouseover() {
    this.element.nativeElement.innerHTML = this.fullText.toUpperCase();
  }
}
