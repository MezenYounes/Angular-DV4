import { Injectable } from '@angular/core';
import { camion } from '../model/camion.model';
@Injectable({
  providedIn: 'root'
})
export class CamionService {
  camions! : camion[];
  camion! : camion;

  constructor() {
    this.camions = [
    {idcamion : 1, nomcamion : "Ford F-150", prixcamion: 35000 , description : "Le Ford F-150 est un camion pick-up populaire et polyvalent"},
    {idcamion : 2, nomcamion : "Toyota Tacoma", prixcamion :  45000, description : "Le Toyota Tacoma est un camion compact durable et fiable"},
    {idcamion : 3, nomcamion :"Chevrolet Silverado", prixcamion : 55000, description : "Le Chevrolet Silverado 2500HD est un camion lourd conçu pour les tâches les plus exigeantes"}
     ];
    }
    listecamion():camion[] {


return this.camions;
}
ajoutercamion( cam: camion){
this.camions.push(cam);
}
supprimercamion( cam: camion){
 
  const index = this.camions.indexOf(cam, 0);
  if (index > -1) {
  this.camions.splice(index, 1);
  }
  }
  consultercamion(id:number): camion{
    this.camion = this.camions.find(p => p.idcamion == id)!;
    return this.camion;
    }
    triercamion(){
      this.camions = this.camions.sort((n1,n2) => {
      if (n1.idcamion! > n2.idcamion!) {
      return 1;
      }
      if (n1.idcamion! < n2.idcamion!) {
      return -1;
      }
      return 0;
      });
      }
      
    updatecamion(c:camion)
{
// console.log(c);
this.supprimercamion(c);
this.ajoutercamion(c);
this.triercamion();
}

  
}