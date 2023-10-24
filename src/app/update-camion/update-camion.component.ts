import { Component, OnInit } from '@angular/core';
import { camion } from '../model/camion.model';
import { CamionService } from '../services/camion.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-camion',
  templateUrl: './update-camion.component.html',
  styleUrls: ['./update-camion.component.css']
})
export class UpdateCamionComponent implements OnInit {
 
  currentcamion = new camion();
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private camionService: CamionService) { }
      ngOnInit() {
        this.currentcamion = this.camionService.consultercamion(this.activatedRoute.snapshot. params['id']);
        console.log(this.currentcamion);
        }
        updatecamion()
        { //console.log(this.currentcamion);
        this.camionService.updatecamion(this.currentcamion);
        this.router.navigate(['camions']);

}}
