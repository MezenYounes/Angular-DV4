import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CamionsComponent } from './camions/camions.component';
import { AddCamionComponent } from './add-camion/add-camion.component';
import { UpdateCamionComponent } from './update-camion/update-camion.component';
const routes: Routes = [
{path: "camions", component : CamionsComponent},
{path: "add-camion", component : AddCamionComponent},
{ path: "", redirectTo: "camions", pathMatch: "full" },
{path: "updateCamion/:id", component : UpdateCamionComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
