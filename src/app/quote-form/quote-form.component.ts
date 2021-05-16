import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  @Output() emitQuote = new EventEmitter()
  quoteStr: string
  quotePublisher: string
  quoteAuthor: string
  theQuote: any

  submitQuote() {
    this.theQuote = new Quote(this.quotePublisher, this.quoteAuthor, this.quoteStr)
    this.quoteStr = ''
    this.quoteAuthor = ''
    this.quotePublisher = ''
    this.emitQuote.emit(this.theQuote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
