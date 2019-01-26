import { Directive, Input, Output, HostListener, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appToogler]'
})
export class TooglerDirective {

  constructor() { }
  @Input() sortToggler: boolean;
  @Output() sortOrder = new EventEmitter();
  @HostListener('click') onclick() {
    this.sortToggler = !this.sortToggler;
    if(this.sortToggler == true) {
      this.sortOrder.emit('asc');
    } else {
      this.sortOrder.emit('desc');
    }
  }
}
