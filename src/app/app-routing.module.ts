import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BerandaComponent} from "./beranda/beranda.component";
import {MakananComponent} from "./makanan/makanan.component";
import {MinumanComponent} from "./minuman/minuman.component";
import {AddctgrComponent} from "./addctgr/addctgr.component";

const routes: Routes = [
  {
    path: 'home' , component:BerandaComponent
  },
  {
    path: 'makanan' , component:MakananComponent
  },
  {
    path: 'minuman' , component:MinumanComponent
  },
  {
    path: 'add' , component:AddctgrComponent
  },
  {
    path: 'update/:id' , component:AddctgrComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
