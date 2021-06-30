import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracking-intro',
  templateUrl: './tracking-intro.component.html',
  styleUrls: ['./tracking-intro.component.css']
})
export class TrackingIntroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ativar() {
    document.getElementById("menu")?.classList.toggle('disabled');
  }

}
