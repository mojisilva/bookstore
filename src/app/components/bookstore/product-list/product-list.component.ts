import { Component, OnInit } from '@angular/core';
import { BookService } from './product-list.component.service';
import { Book } from './model/Book';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  filteredBooks: Book[] = [];
  _books: Book[] =[];

  constructor( private bookService: BookService) {
    this.bookService = bookService;
   }

  ngOnInit(){
    this.bookService.listBooks().subscribe( data=>{
      this._books = data;
      console.log(this._books);
    });
  }

  
      
}