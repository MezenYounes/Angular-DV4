import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CamionsComponent } from './camions/camions.component';
import { AddCamionComponent } from './add-camion/add-camion.component';
import { FormsModule } from '@angular/forms';
import { UpdateCamionComponent } from './update-camion/update-camion.component';

@NgModule({
  declarations: [
    AppComponent,
    CamionsComponent,
    AddCamionComponent,
    UpdateCamionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
