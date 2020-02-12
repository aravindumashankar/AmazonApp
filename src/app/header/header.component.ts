import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  //buttons: string[] = ["Computers", "laptops","Sales","Deals"]


  buttons2: Object[] = [
  {label: "Computers", path: "/login"},
  {label:"Laptops",path:"/laptoplist"},
  {label:"Sales", path:"/login"},
  {label:"Deals",path:"/carousel"}
];
  

  ngOnInit() {
  }

  home()
  {
    this.router.navigate(['/carousel']);
  }

  cart()
  {
    this.router.navigate(['/cart']);
  }

login()
{
  this.router.navigate(['/login']);
}

buttonClick(path: string)
{
  this.router.navigate([path]);
}


}
