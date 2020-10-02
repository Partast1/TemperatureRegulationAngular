import { Component, OnInit } from '@angular/core';
import {TempService} from 'src/app/temp.service';
import {Device} from 'src/app/device';

@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.css']
})
export class HallComponent implements OnInit {
  Devices: Device[];

  getDevices(): void {
    this.tempService.getDevices()
        .subscribe(X => this.Devices = X);
  }
  constructor(private tempService: TempService) { }
  ngOnInit(): void {
    this.getDevices();
  }

}
