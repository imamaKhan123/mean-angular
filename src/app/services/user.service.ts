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
  getUser(id: string): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this._http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

 
 
  register(body:any){
    return this._http.post('http://localhost:3000/users/register', body, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }
  login(body:any){
    return this._http.post('http://localhost:3000/users/login',body,{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }

  Authenticate(body:any){
    return this._http.post<any>('http://localhost:3000/users/authenticate', body, httpOptions)
    .pipe(
      
      catchError(this.handleError)
    );
  }
  postUser(data): Observable<any> {
    return this._http.post(apiUrl, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  
SingleUser(){
  return this._http.get('http://127.0.0.1:3000/users/user',{
    observe:'body',
    withCredentials:true,
    headers:new HttpHeaders().append('Content-Type','application/json')
  })
}
getusersofcompany(id){
  const Url = "http://localhost:3000/users/find";
  const url = `${Url}/${id}`;
  return this._http.get(url, httpOptions).pipe(
    map(this.extractData),
    catchError(this.handleError));
}
/*
public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
}*/

isLoggedOut() {
    return !this.isLoggedIn();
}

getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    return expiresAt;
} 


  checkEmail(email:string) {
    const api='http://127.0.0.1:3000/users/email';
    const url = `${api}/${email}`;
    return this._http.get(url, httpOptions).pipe(
     
      catchError(this.handleError));
  }

  getUsers(): Observable<any> {
    return this._http.get('http://localhost:3000/users/users', httpOptions).pipe(
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
  
  updateUser(id, data): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this._http.put(url, data, httpOptions)
    .pipe(
    catchError(this.handleError)
    );
    }
  
  deleteUser(id: string): Observable<{}> {
    const url = `${apiUrl}/${id}`;
    return this._http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
 
  deleteToken() {
    localStorage.removeItem('token');
  }
  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }
  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }
 
  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }

}
