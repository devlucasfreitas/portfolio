import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loopstudios',
  templateUrl: './loopstudios.component.html',
  styleUrls: ['./loopstudios.component.css']
})
export class LoopstudiosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  } 

  ativado() {
    document.getElementById("menu")?.classList.toggle('disabled');
  }  

}
