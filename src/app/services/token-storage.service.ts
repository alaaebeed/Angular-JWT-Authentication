import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  key = {
    user: 'auth-user',
    token: 'auth-token',
  };
  constructor() {}

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(this.key.token);
    window.sessionStorage.setItem(this.key.token, token);
  }

  public getToken(): string {
    return window.sessionStorage.getItem(this.key.token);
  }

  public saveUser(user): void {
    window.sessionStorage.removeItem(this.key.user);
    window.sessionStorage.setItem(this.key.user, JSON.stringify(user));
  }

  public getUser(): object {
    return JSON.parse(window.sessionStorage.getItem(this.key.user));
  }

  signOut(): void {
    window.sessionStorage.clear();
  }
}
