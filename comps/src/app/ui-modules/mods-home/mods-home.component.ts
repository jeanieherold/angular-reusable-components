import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  modalOpen: boolean = false;
  //will pass this down as a bound properties in this comp template
  items = [
    { title: 'Why is the sky blue?', content: 'Violet and blue light have the shortest wavelengths and red light has the longest. Therefore, blue light is scattered more than red light and the sky appears blue during the day.'},
    { title: 'Why does the sun shine?', content: 'It shines so I can see your face.'},
    { title: 'What is this thing called time?', content: 'It is a gift. What are you going to do with it? What are you waiting for?'}
  ]

  constructor() { }

  ngOnInit(): void { }

  toggleModal() {
    this.modalOpen = !this.modalOpen;
  }

}
