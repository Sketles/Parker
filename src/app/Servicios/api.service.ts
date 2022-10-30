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

  apiURL = 'https://jsonplaceholder.typicode.com'; // Se establece la base url del API a consumir

  constructor(public http: HttpClient) { } // Se declara la variable http de tipo HttpClient

  getPosts1():Observable<any>{
    return this.http.get(this.apiURL+'/posts/').pipe(retry(3));
  }

  getPosts(){
    return new Promise(resolve=>{
      this.http.get(this.apiURL).subscribe(data=>{
          resolve(data);
      },error=>{
        console.log(error);
      });
    });
  }

  getPost(id):Observable<any>{
    return this.http.get(this.apiURL+'/posts/'+id).pipe(retry(3));
  }

  createPost(post):Observable<any>{
    return this.http.post(this.apiURL+'/posts',post,this.httpOptions).pipe(retry(3));
  }
  
  updatePost(id,post):Observable<any>{
    return this.http.put(this.apiURL+'/posts/'+id,post,this.httpOptions).pipe(retry(3));
  }
   
  deletePost(id):Observable<any>{
    return this.http.delete(this.apiURL+'/posts/'+id,this.httpOptions);
  }
}




 
 
 
 

