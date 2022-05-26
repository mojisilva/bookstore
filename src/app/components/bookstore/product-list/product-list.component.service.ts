import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";
import { Book } from "./model/Book";
@Injectable({
    providedIn: 'root'
})

export class BookService{

    private url: string;

    httpOptions={
        Headers: new HttpHeaders({'content-type':'application/json'})
    }

    constructor(private http: HttpClient){
        this.url = 'http://localhost:8080/books/api/createbook';
    }

    listBooks(): Observable<Book[]> {
        return this.http.get<Book[]>(this.url);
    }

}