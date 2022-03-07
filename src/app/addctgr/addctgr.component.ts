import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MasterService} from "../service/master.service";
import {Category} from "../model/category.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-addctgr',
  templateUrl: './addctgr.component.html'
})
export class AddctgrComponent implements OnInit {
  formAdd!: FormGroup;
  id!: number;
  constructor(private formBuild: FormBuilder, private mast: MasterService,
              private ruter: Router,
              private route: ActivatedRoute ) {
    this.formAdd = this.formBuild.group({
      'category_id': [null],
      'department_id': [null],
      'name': [null],
      'description': [null]
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe(rute =>{
      this.id= rute ['id'];
      if(this.id){
        console.log(this.id)
        this.mast.getCatById(this.id).subscribe({
          next: value => {
            this.formAdd.controls['department_id'].setValue(value.department_id)
            this.formAdd.controls['name'].setValue(value.name)
            this.formAdd.controls['description'].setValue(value.description)
          }
        })
      }
    })
  }

  simpan(): void {
    let category = <Category>{};
    category.category_id = this.formAdd.controls['category_id'].value
    category.department_id = this.formAdd.controls['department_id'].value
    category.name = this.formAdd.controls['name'].value
    category.description = this.formAdd.controls['description'].value
    if(this.id){
      category.category_id = this.id;
    }
    this.mast.saveCategory(category).subscribe({
      next: hasil =>{
        alert('Simpan Berhasil')
        this.ruter.navigateByUrl("/update/" + category.category_id);
      },
      error: err => {
        console.log(err)
      }
    });
  }

  update(): void {
    let category = <Category>{};
    category.category_id = this.formAdd.controls['category_id'].value
    category.department_id = this.formAdd.controls['department_id'].value
    category.name = this.formAdd.controls['name'].value
    category.description = this.formAdd.controls['description'].value
    if(this.id){
      category.category_id = this.id;
    }
    this.mast.updateCategory(category).subscribe({
      next: hasil =>{
        alert('Update Berhasil yuhu')
        this.ruter.navigateByUrl("/list/" + category.category_id);
      },
      error: err => {
        console.log(err)
      }
    });
  }
}
