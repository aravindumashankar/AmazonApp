import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  //employees: Observable<Employee[]>;
  id: number;
  prod: Product;
  alert :boolean;
quant : number; 
  
  constructor(private route: ActivatedRoute,private router: Router, private productservice : ProductService) { }
  
  checkbutton: string[] = ["HP", "Microsoft","Apple"];
  checkscreen : string[] = ["13\"","15\"","17\""];
  checkprice : string[]= ["$100-$500","$700-$1000","$1500-$2000"];
  
  
  ngOnInit() {
    this.prod = new Product();

    this.id = this.route.snapshot.params['id'];
    
    this.productservice.getProduct(this.id)
      .subscribe(data => {
        console.log(data)
        this.prod = data;
      }, error => console.log(error));
  }

// cart(id : number)
// {
//   this.router.navigate(['carts', id])
// }

addtocart(id : number , quantity : number ){
this.router.navigate([ id , quantity]);


}
}
