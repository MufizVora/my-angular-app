import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[CustomDirective]'
})
 
export class CustomDirectiveDirective implements OnInit {

  @Input() color!:string;
  constructor(private element : ElementRef) { }

  ngOnInit(): void {
    /* added different color with the same directive */
    this.element.nativeElement.style.backgroundColor = this.color;
    /* added styles */
    // this.element.nativeElement.style.backgroundColor = '#f5f5f5';
    this.element.nativeElement.style.border = '1px solid #ddd';    
    this.element.nativeElement.style.borderRadius = '5px';    
    this.element.nativeElement.style.width = '200px';    
    this.element.nativeElement.style.height = '130px';    
    this.element.nativeElement.style.padding = '10px'; 
    
    /* added class */
    // this.element.nativeElement.classList.add('card-success')
  }
}