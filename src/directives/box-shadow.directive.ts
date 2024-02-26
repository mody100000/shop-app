import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBoxShadow]',
  standalone: true,
})
export class BoxShadowDirective {
  constructor(private domEle: ElementRef) {
    this.domEle.nativeElement.style.borderRadius = '50px';
    this.domEle.nativeElement.style.boxShadow =
      '0 4px 6px rgba(0, 0, 0, 0.1), 0 8px 24px rgba(0, 0, 0, 0.2)';
  }
  @HostListener('mouseenter') onMouseIn() {
    this.domEle.nativeElement.style.boxShadow =
      '0 4px 8px rgba(0, 0, 0, 0.3), 0 12px 36px rgba(0, 0, 0, 0.4)';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.domEle.nativeElement.style.boxShadow =
      '0 4px 6px rgba(0, 0, 0, 0.1), 0 8px 24px rgba(0, 0, 0, 0.2)';
  }
}
