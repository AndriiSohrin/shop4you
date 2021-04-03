import {Component, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input()
  openMenu: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  open(): void {
    this.openMenu = !this.openMenu;
  }
}
