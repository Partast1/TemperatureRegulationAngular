import { Component, OnInit } from '@angular/core';
export interface Tile {
  cols: number;
  rows: number;
  text: string;
  border: string;
}
@Component({
  selector: 'app-middle-bhall',
  templateUrl: './middle-bhall.component.html',
  styleUrls: ['./middle-bhall.component.css']
})
export class MiddleBHallComponent implements OnInit {
  tiles: Tile[] = [
    {text: '', cols: 1, rows: 1 ,border: ''},
    {text: 'b.30', cols: 2, rows: 2 ,border: '3px double black'},
    {text: '', cols: 1, rows: 1 ,border: ''},
    {text: 'Gård', cols: 8, rows: 2 ,border: '3px double black'},
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
