import { Directive, Input, Output, HostListener, EventEmitter, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appToogler]'
})
export class TooglerDirective implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) { }
  
  ngOnInit() {    
    let th = this.el.nativeElement;
    let span = this.renderer.createElement('span');
    this.renderer.appendChild(th, span);
  }

  @Input() sortToggler: boolean;
  @Output() sortOrder = new EventEmitter();
  @HostListener('click') onclick() {
    console.log(this.el);

    this.sortToggler = !this.sortToggler;
    if(this.sortToggler == true) { 
      let elems = document.querySelectorAll('.myTable thead tr th');
      let th = this.el.nativeElement;
      let span = th.children[0];

      for(let i = 0; i < elems.length; i++) {
        this.renderer.removeClass(elems[i].children[0], 'fa');
        this.renderer.removeClass(elems[i].children[0], 'fa-caret-up');
        this.renderer.removeClass(elems[i].children[0], 'fa-caret-down');
      }      

      this.renderer.addClass(span, 'fa');
      this.renderer.addClass(span, 'fa-caret-up');
      this.sortOrder.emit('asc');
    } else if(this.sortToggler == false){
      let elems = document.querySelectorAll('.myTable thead tr th');
      let th = this.el.nativeElement;
      let span = th.children[0];

      for(let i = 0; i < elems.length; i++) {
        this.renderer.removeClass(elems[i].children[0], 'fa');
        this.renderer.removeClass(elems[i].children[0], 'fa-caret-up');
        this.renderer.removeClass(elems[i].children[0], 'fa-caret-down');
      }
      this.renderer.addClass(span, 'fa');
      this.renderer.addClass(span, 'fa-caret-down');
      this.sortOrder.emit('desc');
    }
  }
}
