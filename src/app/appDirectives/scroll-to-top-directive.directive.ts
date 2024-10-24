import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[ScrollToTopDirective]'
})
export class ScrollToTopDirectiveDirective {

  constructor(private element : ElementRef) { }
  
  @HostListener('click')
  onClicked(){
    window.scrollTo({top : 0, behavior : 'smooth'})
  }
}