import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[BtnStyling]'
})
export class BtnStylingDirective implements OnInit {
 constructor(private el: ElementRef) {
    console.log('BtnStylingDirective initialized on', this.el.nativeElement);
     
  }

  ngOnInit(): void {
    // this.setBaseStyles();
  }
}
