import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() classNames: string = '';
  @Input() data: Array<any> = [];
  @Input() headers: Array<any> = [];

  constructor() { }

  ngOnInit(): void { }

}
