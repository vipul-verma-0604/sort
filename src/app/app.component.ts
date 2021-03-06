import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggle: boolean;
  sortOrder: string;
  info = [
    {"id": "001", "Name": "Vipul", "Location": "India"},
    {"id": "001", "Name": "Vipul", "Location": "India"},
    {"id": "001", "Name": "Vipul", "Location": "India"},
    {"id": "001", "Name": "Vipul", "Location": "India"},
    {"id": "001", "Name": "Vipul", "Location": "India"}
  ]

  constructor(private renderer: Renderer2) {}

  onClick(e) {
    
  }

  getSortOrder(e) {
    console.log(e);
    this.sortOrder = e;
  }
}
