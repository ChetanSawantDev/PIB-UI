import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private tokenKey = 'access_token';

  // Save token to storage
  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  // Retrieve token from storage
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Remove token from storage
  removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  // Check if token is expired
  isTokenExpired(token?: string): boolean {
    if (!token) token = this.getToken()!;
    if (!token) return true;
    const expiry = this.getTokenExpiration(token);
    if (!expiry) return true;
    return Math.floor(new Date().getTime() / 1000) >= expiry;
  }

  // Decode the token to get the expiration time (assumes JWT format)
  private getTokenExpiration(token: string): number | null {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp;
    } catch (error) {
      return null;
    }
  }
}
