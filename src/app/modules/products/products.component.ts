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
      name:['mayank',[Validators.required]],
      category:['new',[Validators.required]], 
      cost:['2000',[Validators.required]], 
      description:['akbdkadkadjhalkdbajdlabdkdkabkdajdak',[Validators.required]],
      id:['']
    });
  }

  get f(){
    return this.ProductForm.controls;
  }

  addproducts(){

    console.log('asd')
  //  document.getElementById('action').click();
  }

  onSubmit(){

    if(this.ProductForm.valid){
      if(this.f.id.value != ''){

        this.dataarray[this.f.id.value-1] = this.ProductForm.value;
      } else {

       let id= this.dataarray.length +1;
       let data = this.ProductForm.value;
       data['id'] = id
      this.dataarray.push(data)

      }
    }
    console.log(this.ProductForm.valid,this.dataarray)
  }

  closecard(data){
let tempdata = []
    this.dataarray.map(el=>{
if(el.id != data.id){
  tempdata.push(el)
}
    });

    this.dataarray = tempdata;

  }

  editCard(data){

    this.ProductForm.patchValue({
      id:data.id,
      name:data.name,
      category:data.category, 
      cost:data.cost, 
      description:data.description,
    });

    document.getElementById('openedit').click();

  }

  ngAfterViewInit(){

    setInterval(()=>{
      const classCheck = document.getElementById('collapseWidthExample');
      this.Height = window.innerHeight;  
     if(classCheck.classList.contains('show') && this.nav_text != 'CLOSE'){
      this.nav_text = 'CLOSE';
     } else if(!classCheck.classList.contains('show') && this.nav_text != 'CREATE') {
      this.nav_text = 'CREATE';
      this.ProductForm.patchValue({
        id:'',
        name:'',
        category:'', 
        cost:'', 
        description:'',
      })
     }

    },1000)
  }

}
