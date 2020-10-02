import { Component, OnInit, Testability } from '@angular/core';
import {TempService} from 'src/app/temp.service';
import {Device} from 'src/app/device';
export interface Tile {
  cols: number;
  rows: number;
  text: string;
  border: string;

}
@Component({
  selector: 'app-upper-bhall',
  templateUrl: './upper-bhall.component.html',
  styleUrls: ['./upper-bhall.component.css']
})
export class UpperBHallComponent implements OnInit {
  Devices: Device[];
  i: number;

    getDevices(): void {
      this.tempService.getDevices()
          .subscribe(X => this.Devices = X);
    }
    constructor(private tempService: TempService) { }
getInfo(){

  // for (let i = 0; i < Device.length; i++) {
  //   console.log ("Block statement execution no." + i);
   
  // }
  for (var val of this.Devices) {
    console.log(val);
  }
}
  ngOnInit(): void {
    this.getDevices();
  }
  getDeviceAsText(i: number): string{
    var infoAsString = (typeof String(this.Devices[i]));
    return infoAsString;
 }
  tiles: Tile[] = [
    {text: 'b.26', cols: 2, rows: 2 ,border: '3px double black'},
    {text: 'b.24', cols: 2, rows: 2 ,border: '3px double black'},
    {text: 'b.16', cols: 2, rows: 2 ,border: '3px double black'},
    {text: 'b.14', cols: 2, rows: 2 ,border: '3px double black'},
    {text: 'b.12', cols: 1, rows: 2 ,border: '3px double black'},
    {text: 'b.10', cols: 1, rows: 2 ,border: '3px double black'},
    {text: 'b.8', cols: 1, rows: 1 ,border: '3px double black'},
    {text: 'b.6', cols: 1, rows: 1 ,border: '3px double black'},
    {text: '', cols: 1, rows: 1 ,border: ''},
    {text: 'Trappe', cols: 1, rows: 1 ,border: '3px double black'},
    ];
}
