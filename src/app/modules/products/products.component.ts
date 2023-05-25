import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
classlist:any ='';
ProductForm: FormGroup;
nav_text:any = 'CREATE';
Height: number=0;
dataarray:any=[];

  constructor(
    private toastr: ToastrService,
    private el: ElementRef,
    private formbuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.ProductForm = this.formbuilder.group({
      name:['',[Validators.required]],
      category:['',[Validators.required]], 
      cost:['',[Validators.required]], 
      description:['',[Validators.required]],
      id:['1',[Validators.required]]
    });
  }

  addproducts(){

    console.log('asd')
  //  document.getElementById('action').click();
  }

  onSubmit(){

    if(this.ProductForm.valid){
this.dataarray.push(this.ProductForm.value)
    }
    console.log(this.dataarray)
  }

  ngAfterViewInit(){

    setInterval(()=>{
      const classCheck = document.getElementById('collapseWidthExample');
      this.Height = window.innerHeight;  
     if(classCheck.classList.contains('show')){
      this.nav_text = 'CLOSE';
     } else {
      this.nav_text = 'CREATE';
     }

    },1000)
  }

}
