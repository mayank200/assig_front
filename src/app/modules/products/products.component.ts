import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductsService } from './products.service';
import { SessionService } from 'src/shared/services/session.service';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../login/login.service';
import jwt_decode from 'jwt-decode';

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
user:any = ''

  constructor(
    private toastr: ToastrService,
    private el: ElementRef,
    private formbuilder: FormBuilder,
    private router: Router,
    public _ProductsService: ProductsService,
    public _SessionService:SessionService,
    public _loginService:LoginService
  ) { }

  ngOnInit(): void {

    this._loginService.login({"id":"assignment@test.com","pass":"123456","name":"user"}).subscribe((resData: any) => {
      if (resData.status) {
        localStorage.setItem('login', '1');
        localStorage.setItem('activeUser', JSON.stringify(resData));
        let localStorageData = localStorage.getItem('activeUser');
        if (localStorageData != null) {
          let localStorageObject = JSON.parse(localStorageData);
          let token = localStorageObject.token;

          let decodedTokenData = jwt_decode(token);

          let decodedTokenDataString = JSON.stringify(decodedTokenData);

          let data = this._SessionService.get_user_token();
          this.user = data.name;

          this.getProducts();
        }
      }
    });





    this.ProductForm = this.formbuilder.group({
      name:['',[Validators.required]],
      category:['',[Validators.required]],
      cost:['',[Validators.required]],
      description:['',[Validators.required]],
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

  getProducts(){

    this._ProductsService.crud_operation({'action':'getall'}).subscribe((resData:any)=>{

      if(resData.status){
        this.dataarray = resData.data
      } else {
        this.dataarray =[];
        this.toastr.error('No Products Are Available.Please Add Product and try again','Oops!')
      }
    })
  }

  onSubmit(){

    if(this.ProductForm.valid){
      if(this.f.id.value != ''){

        let list={
          'action':'update',
          'id': this.f.id.value.toString(),
          'name': this.f.name.value.toString(),
          'category': this.f.category.value.toString(),
          'cost': this.f.cost.value.toString(),
          'description': this.f.description.value.toString()
        }

        this._ProductsService.crud_operation(list).subscribe((resData:any)=>{

          if(resData.status){
            this.toastr.success('Product Successfully updated.','Oops!')
            this.getProducts();
            this.ProductForm.reset();
            document.getElementById('openedit').click();
          } else {
            this.toastr.error('Something Went Wrong.Please Try again.','Oops!')
          }
        })

      } else {

        let list={
          'action':'create',
          'name': this.f.name.value.toString(),
          'category': this.f.category.value.toString(),
          'cost': this.f.cost.value.toString(),
          'description': this.f.description.value.toString()
        }

        this._ProductsService.crud_operation(list).subscribe((resData:any)=>{

          if(resData.status){
            this.toastr.success('Product Successfully Created.','Oops!')
            this.getProducts();
            this.ProductForm.reset();
          } else {

            this.toastr.error('Something Went Wrong.Please Try again.','Oops!')
          }
        })

      }
    }
    console.log(this.ProductForm.valid,this.dataarray)
  }

  closecard(data){

    this._ProductsService.crud_operation({'action':'delete','id':data.id.toString()}).subscribe((resData:any)=>{

      if(resData.status){
        this.toastr.success('Product Successfully Removed.','Oops!')
        this.getProducts();
        this.ProductForm.reset();
      } else {
        this.toastr.error('Something Went Wrong.Please Try again.','Oops!')
      }
    })

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

  logout(){
    if(confirm('Do you want to log out?')){
      localStorage.clear();
      this.router.navigate(['/login']);
    }
  }
}
