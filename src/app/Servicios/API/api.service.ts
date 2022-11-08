import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' :'*'
    })
  }

  apiURL = 'https://jsonplaceholder.typicode.com'; // API URL JSON PAGINA

  constructor(private http: HttpClient) { } // DECLARACION DE VARIABLE DE TIPO HTTP

  getPosts():Observable<any>{
    return this.http.get<any>(this.apiURL+'/posts/').pipe(retry(3));
  }

  getPost(id):Observable<any>{
    return this.http.get<any>(this.apiURL+'/posts/'+id).pipe(retry(3));
  }

  createPost(post):Observable<any>{
    return this.http.post<any>(this.apiURL+'/posts',post,this.httpOptions).pipe(retry(3));
  }
  
  updatePost(id,post):Observable<any>{
    return this.http.put<any>(this.apiURL+'/posts/'+id,post,this.httpOptions).pipe(retry(3));
  }
   
  deletePost(id):Observable<any>{
    return this.http.delete<any>(this.apiURL+'/posts/'+id,this.httpOptions);
  }
}




 
 
 
 

