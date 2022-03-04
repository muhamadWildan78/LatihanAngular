import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MasterService} from "../service/master.service";
import {Category} from "../model/category.model";

@Component({
  selector: 'app-addctgr',
  templateUrl: './addctgr.component.html'
})
export class AddctgrComponent implements OnInit {
  formAdd!: FormGroup;
  constructor(private formBuild: FormBuilder, private mast: MasterService) {
  }
  ngOnInit(): void {
    this.formAdd = this.formBuild.group({
      'category_id': [null],
      'department_id': [null],
      'name': [null],
      'description': [null]
    })
  }
  simpan(): void {
    let category = <Category>{};
    category.category_id = this.formAdd.controls['category_id'].value
    category.department_id = this.formAdd.controls['department_id'].value
    category.name = this.formAdd.controls['name'].value
    category.description = this.formAdd.controls['description'].value
    this.mast.saveCategory(category).subscribe({
      next: hasil =>{
        alert('Simpan Berhasil')
      },
      error: err => {
        console.log(err)
      }
    });
  }
}
