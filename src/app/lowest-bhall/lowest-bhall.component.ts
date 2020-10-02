import { Component, OnInit } from '@angular/core';
export interface Tile {
  cols: number;
  rows: number;
  text: string;
  border: string;
}
@Component({
  selector: 'app-lowest-bhall',
  templateUrl: './lowest-bhall.component.html',
  styleUrls: ['./lowest-bhall.component.css']
})
export class LowestBHallComponent implements OnInit {
  tiles: Tile[] = [
    {text: 'b.23', cols: 3, rows: 2 ,border: '3px double black'},
    {text: 'b.21', cols: 7, rows: 2 ,border: '3px double black'},
    {text: 'b.11', cols: 3, rows: 2 ,border: '3px double black'},
    {text: 'b.01', cols: 7, rows: 2 ,border: '3px double black'},
   
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
