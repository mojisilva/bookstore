import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Book } from "./model/Book";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class BookService{

    private url = 'http://localhost:8080/books/api/createbook';

    httpOptions={
        Headers: new HttpHeaders({'content-type':'application/json'})
    }

    constructor(private http: HttpClient){}

    listBooks() :Observable<Book[]>{
        return this.http.get<Book[]>(this.url);
    }

}