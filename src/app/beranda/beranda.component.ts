import { Component, OnInit } from '@angular/core';
import {MasterService} from "../service/master.service";
import {Category} from "../model/category.model";

@Component({
  selector: 'app-beranda',
  templateUrl: './beranda.component.html'
})
export class BerandaComponent implements OnInit {
  Listcategory! : Category[]
  constructor(private mast: MasterService) { }

  ngOnInit(): void {
  this.mast.ListCategory().subscribe( {
    next: hasil =>{
      this.Listcategory = hasil
    },
    error: err => {
      console.log(err)
    }, complete: () =>{

    }
  })
  }

}
