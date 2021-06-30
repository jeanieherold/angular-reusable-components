import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  //data & headers configuration array of objects for our Table Component
  //adding extra key/values in the data set to show how our header config
  //defines what we actually see in the table
  data = [
    { name: 'Willie', age: 24, job: 'Designer', employed: false },
    { name: 'Lexi', age: 34, job: 'Engineer', employed: false },
    { name: 'Jeanie', age: 44, job: 'Engineer', employed: true }
  ];

  //data.employed wont show in table unless you add the key: ''employed' 
  //to the header configuration
  //we only need to change these configuration properties to add additional data
  //dont need to change the actual Table Component markup
  headers = [
    { key: 'name', label: 'Name'},
    { key: 'age', label: 'Age'},
    { key: 'job', label: 'Job'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
