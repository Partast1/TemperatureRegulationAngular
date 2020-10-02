import { Component, OnInit } from '@angular/core';
import {TempService} from 'src/app/temp.service';
import {Device} from 'src/app/device';
@Component({
  selector: 'app-bhall',
  templateUrl: './bhall.component.html',
  styleUrls: ['./bhall.component.css']
})
export class BhallComponent implements OnInit {
  Devices: Device[];

  getDevices(): void {
    this.tempService.getDevices()
        .subscribe(X => {this.Devices = X;  console.log(this.Devices[1])});
  }
  constructor(private tempService: TempService) { }

  ngOnInit(): void {
    this.getDevices();
  }
  
}
