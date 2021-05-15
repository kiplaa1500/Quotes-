import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {
  numberOfLikes: number = 0;

  likeButtonClick() {
    this.numberOfLikes++;

  };
  dislikesButtonClick() {
    this.numberOfLikes--;

  }

  constructor() { }

  ngOnInit(): void {
  }

}
