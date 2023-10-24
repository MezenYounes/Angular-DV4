import { Component, OnInit } from '@angular/core';
import { camion } from '../model/camion.model';
import { CamionService } from '../services/camion.service';
@Component({
  selector: 'app-add-camion',
  templateUrl: './add-camion.component.html',
  styleUrls: ['./add-camion.component.css']
})
export class AddCamionComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  newcamion = new camion();
  constructor(private camionService: CamionService) { }
  addcamion(){
  
  this.camionService.ajoutercamion(this.newcamion);
  }


}
