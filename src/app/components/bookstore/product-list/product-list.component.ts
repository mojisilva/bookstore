import { Component, OnInit } from '@angular/core';
import { BookService } from './product-list.component.service';
import { Book } from './model/Book';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  
  _books : Book[] = [];  

  constructor( private bookService: BookService) {
    this.bookService = bookService;
   }

  ngOnInit(): void {
    this.listBooks();  
  }

  listBooks():void {
    this.bookService.listBooks().subscribe({
      next: books => {
        this._books = books;
      },
      error: err  => console.log('Erro: ', err),
    })

  }
      
}