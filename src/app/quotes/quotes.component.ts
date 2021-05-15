import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  numberOfLikes!: number;

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
