import { Directive,ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[dirSel]'
})
export class MyDirective {

  constructor(private el:ElementRef) {
    el.nativeElement.style.backgroundColor = 'green';
   }
   

@HostListener ('mouseenter') onMouseEnter (){
  this.dirSel('yellow')

}
@HostListener ('mouseleave') onMouseLeave (){
  this.dirSel('green')

}
 private dirSel(color: string){
   this.el.nativeElement.style.backgroundColor = color;
 }

}
