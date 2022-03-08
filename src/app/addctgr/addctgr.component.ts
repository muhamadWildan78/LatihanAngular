import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MasterService} from "../service/master.service";
import {Category} from "../model/category.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrModule, ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-addctgr',
  templateUrl: './addctgr.component.html'
})
export class AddctgrComponent implements OnInit {
  formAdd!: FormGroup;
  id!: number;

  constructor(private toastr: ToastrService,
              private formBuild: FormBuilder,
              private mast: MasterService,
              private ruter: Router,
              private route: ActivatedRoute) {
    this.formAdd = this.formBuild.group({
      'category_id': new FormControl(null, [Validators.required,
        Validators.minLength(1)]),
      'department_id': new FormControl(null, [Validators.required,
        Validators.minLength(1)]),
      'name': new FormControl(null, [Validators.required,
        Validators.minLength(3)]),
      'description': new FormControl(null, [Validators.required,
        Validators.minLength(3)])
    })
  }
  // blankSpaces(control: FormControl): { [s: string]: boolean } | null{
  //   if (control.value != null && control.value.trim().length === 0) {
  //     return {'blankspaces': true}
  //   }
  //   return null;
  // }
  // log(param:any):void{
  //   console.log(param)
  // }


  ngOnInit(): void {
    this.route.params.subscribe(rute => {
      this.id = rute ['id'];
      if (this.id) {
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
    console.log(this.formAdd.controls)
    console.log(this.formAdd.valid)
    if (this.formAdd.valid) {
      let category = <Category>{};
      category.category_id = this.formAdd.controls['category_id'].value
      category.department_id = this.formAdd.controls['department_id'].value
      category.name = this.formAdd.controls['name'].value
      category.description = this.formAdd.controls['description'].value
      if (this.id) {
        category.category_id = this.id;
      }
      this.mast.saveCategory(category).subscribe({
        next: hasil => {
          this.toastr.success(hasil.status, 'simpan berhasil')
          this.ruter.navigateByUrl('/update/' + category.category_id);
        },
        error: err => {
          const pesan: any[] = err.error.status;
          let msg = '';
          for (let i = 0; i < pesan.length; i++) {
            msg += pesan[i].field+ " : " + pesan[i].defaultMessage +"\n";
          }
          console.log(msg)
          this.toastr.error(msg, 'Error!', {
            positionClass: 'toast-top-center'
          })
        }
      });
    } else {
      this.toastr.error("Form Harus Terisi", "GAGAL", {
        positionClass: 'toast-top-center'
      })
    }
  }

  update(): void {
    if (this.formAdd.valid) {
      let category = <Category>{};
      category.category_id = this.formAdd.controls['category_id'].value
      category.department_id = this.formAdd.controls['department_id'].value
      category.name = this.formAdd.controls['name'].value
      category.description = this.formAdd.controls['description'].value
      if (this.id) {
        category.category_id = this.id;
      }
      this.mast.updateCategory(category).subscribe({
        next: hasil => {
          alert('Update Berhasil yuhu')
          this.ruter.navigateByUrl('/home/')
        },
        error: err => {
          console.log(err)
        }
      });
    } else {
      alert("form Harus diisi WOI")
    }
  }
}
