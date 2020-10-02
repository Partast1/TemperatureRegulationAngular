import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BhallComponent } from './bhall/bhall.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UpperBHallComponent } from './upper-bhall/upper-bhall.component';
import { LowerBHallComponent } from './lower-bhall/lower-bhall.component';
import { MiddleBHallComponent } from './middle-bhall/middle-bhall.component';
import { LowestBHallComponent } from './lowest-bhall/lowest-bhall.component';
import { HttpClientModule } from '@angular/common/http';
import {TempService} from './temp.service';
import { HallComponent } from './hall/hall.component';


@NgModule({
  declarations: [
    AppComponent,
    BhallComponent,
    UpperBHallComponent,
    LowerBHallComponent,
    MiddleBHallComponent,
    LowestBHallComponent,
    HallComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [TempService],
  bootstrap: [AppComponent]
})
export class AppModule { }
