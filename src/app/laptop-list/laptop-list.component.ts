import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { Product } from "../product";
import { ProductService} from "../product.service";

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrls: ['./laptop-list.component.scss']
})
export class LaptopListComponent implements OnInit {

  products : Observable<Product[]>

 
  constructor( private router : Router, private productservice: ProductService) { }

  
checkbutton: string[] = ["HP", "Microsoft","Apple"];
checkscreen : string[] = ["13\"","15\"","17\""];
checkprice : string[]= ["$100-$500","$700-$1000","$1500-$2000"];



// laptops : object[] = [
//   {images:"./assets/Aceraspire515inch.jpg"  ,id : "1" , name : "Acer aspire 5 15inch ", price: 20,rating : "4.5/5"},
//   {images:"./assets/acer predator helios 300 15inch.jpg",id : "2" , name : "acer predator helios", price: 30,rating : "4.5/5"},
//   {images:"./assets/Acer spin 3 15inch.jpg",id : 3 , name : "Acer spin 3 15inch", price: 40,rating : "4.5/5"},
//   {images:"./assets/asus tuf 15inch.jpg",id : 4 , name : "asus tuf 15inch ", price: 50,rating : "4.5/5"},
//   {images:"./assets/asus vivobook 15inch.jpg",id : 5 , name : "asus vivobook 15inch ", price: 60,rating : "4.5/5"},
//   {images:"./assets/dell inspiron 14 15inch.jpg",id : 6 , name : "dell inspiron 14  ", price: 70,rating : "4.5/5"},
//   {images:"./assets/HP pavilion X360 15inch.jpg",id : 7 , name : "HP pavilion X360", price: 80,rating : "4.5/5"},
//   {images:"./assets/lenovo chromebook 13inch.jpg",id : 8 , name : "lenovo chromebook  ", price: 90,rating : "4.5/5"},
//   {images:"./assets/HP stream 15inch.jpg",id : 9 , name : "HP stream 15inch ", price: 100,rating : "4.5/5"},
//   {images:"./assets/Lenovo flex 14 15inch.jpg",id : 10 , name :"Lenovo flex 14  ", price: 110,rating : "4.5/5"},
//   {images:"./assets/lenovo ideapad 330 15inch.jpg",id : 11, name : "lenovo ideapad 330 ", price: 120,rating : "4.5/5"},
//   {images:"./assets/lenovo ideapad L340 15inch.jpg",id : 12, name : "lenovo ideapad L340  ", price: 130,rating : "4.5/5"},
//   {images:"./assets/macbook air 13inch.jpg",id : 13, name : "macbook air 13inch ", price: 140,rating : "4.5/5"},
//   {images:"./assets/macbook pro 17inch.jpg",id : 14, name : "macbook pro 17inch ", price: 150,rating : "4.5/5"},
//   {images:"./assets/microsoft surface go 13inch.jpg",id : 15, name : "microsoft surface go  ", price: 160,rating : "4.5/5"},
//   {images:"./assets/microsoft surface pro 7 13inch.jpg",id : 16, name : "microsoft surface pro 7 ", price: 170,rating : "4.5/5"}

// ]

  ngOnInit() {
  this.products = this.productservice.getProductlist();
  }

  detailspage(id : number )
  {
    this.router.navigate(['productdetails', id]);
  }



}
