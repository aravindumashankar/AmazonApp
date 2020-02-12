import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  slides: Object[] = [{image: "./assets/tvadd1.jpeg"}, {image: "./assets/tvadd2.jpeg"}]


  ngOnInit() {
  }

}
