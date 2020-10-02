import { Injectable } from '@angular/core';
import { Device } from './device';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TempService {

  constructor(private http: HttpClient) { }
  getDevices(){
    return this.http.get<Device[]>('https://localhost:44317/api/device/');
  }
  
}
