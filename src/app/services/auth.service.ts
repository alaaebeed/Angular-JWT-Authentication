import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  AUTH_API: string = 'http://localhost:8080/api/auth/';

  // handel https header requests
  httpsOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  register(user): Observable<any> {
    const { username, email, password } = user;

    return this.http.post(
      this.AUTH_API + 'register',
      { username, email, password },
      this.httpsOptions
    );
  }

  login(user): Observable<any> {
    const { username, password } = user;
    return this.http.post(
      this.AUTH_API + 'login',
      { username, password },
      this.httpsOptions
    );
  }
}
