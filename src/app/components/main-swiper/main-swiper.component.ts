import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'main-swiper',
  templateUrl: './main-swiper.component.html',
  styleUrls: ['./main-swiper.component.css']
})
export class MainSwiperComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  onSwiper(swiper): void {
    console.log(swiper);
  }

  onSlideChange(): void {
    console.log('slide change');
  }

}
