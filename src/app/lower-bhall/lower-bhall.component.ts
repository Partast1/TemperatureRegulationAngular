import { Component, OnInit } from '@angular/core';
export interface Tile {
  cols: number;
  rows: number;
  text: string;
  // text2: string;
  border: string;
}
@Component({
  selector: 'app-lower-bhall',
  templateUrl: './lower-bhall.component.html',
  styleUrls: ['./lower-bhall.component.css']
})
export class LowerBHallComponent implements OnInit {
  tiles: Tile[] = [
    {text: 'b.25', cols: 2, rows: 2 ,border: '3px double black'},
    {text: '', cols: 1, rows: 1 ,border: ''},
    {text: 'b.20', cols: 2, rows: 1 ,border: '3px double black'},
    {text: 'b.21', cols: 1, rows: 1 ,border: '3px double black'},
    {text: '', cols: 1, rows: 1 ,border: ''},
    {text: 'b.19', cols: 3, rows: 1 ,border: '3px double black'},
    {text: 'b.13', cols: 3, rows: 1 ,border: '3px double black'},
    {text: 'b.9', cols: 1, rows: 1 ,border: '3px double black'},
    {text: 'b.7', cols: 3, rows: 1 ,border: '3px double black'},
    {text: 'b.5', cols: 1, rows: 1 ,border: '3px double black'},
    {text: 'b.3', cols: 2, rows: 1 ,border: '3px double black'},
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
