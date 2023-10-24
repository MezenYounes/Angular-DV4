import { Component, OnInit } from '@angular/core';
import { camion } from '../model/camion.model';
import { CamionService } from '../services/camion.service';
@Component({
  selector: 'app-camions',
  templateUrl: './camions.component.html',
  styleUrls: ['./camions.component.css']
})
export class CamionsComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  camions! : camion[];

    constructor(private camionService: CamionService) {  
      this.camions = camionService.listecamion();
      
    }
    supprimercamion(c: camion)
{
//console.log(c);
let conf = confirm("Etes-vous sûr ?");
 if (conf){
this.camionService.supprimercamion(c);
}
}    
    



}
