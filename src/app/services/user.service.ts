import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "http://localhost:3000/users/";
@Injectable()

export class UserService {
  authToken: any;
  _user: any;
  constructor(private _http: HttpClient) { }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  };
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }


  postBook(data): Observable<any> {
    return this._http.post('http://localhost:3000/users/usersList', data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
 
  register(body:any){
    return this._http.post(apiUrl, body, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }




  login(body:any){
    return this._http.post('http://127.0.0.1:3000/users/login',body,{
      observe:'body',
      withCredentials:false,
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }


  checkEmail(email:string) {
    const api='http://127.0.0.1:3000/users/email';
    const url = `${api}/${email}`;
    return this._http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  getUsers(): Observable<any> {
    return this._http.get('http://localhost:3000/users/usersList', httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  user(){
    return this._http.get('http://localhost:3000/users/usersList',{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }
 
  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

/*

  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this._http.post('http://localhost:3000/users/register', user)
      .map(res => res.json());
  }

 
 

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
*/
}
