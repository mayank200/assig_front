import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
classlist:any ='';

nav:any = '+';
  constructor() { }

  ngOnInit(): void {
    this.classlist = document.getElementById('collapseWidthExample').classList
  }

  addproducts(){


  }

  ngAfterViewInit(){

    setInterval(()=>{
      const classCheck = document.getElementById('collapseWidthExample');

     if(classCheck.classList.contains('show')){
      classCheck.textContent = '-';
     } else {
      classCheck.textContent = '+';
     }

    },1000)
  }

}
