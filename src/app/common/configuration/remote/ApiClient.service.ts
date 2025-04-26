import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../auth/token.service';

@Injectable({
  providedIn: 'root' 
})
export class ApiService {
    constructor(private http: HttpClient,public _tokenService: TokenService) {}

    
    gFN_GetApiCall(_url : string): Observable<any> {
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${this._tokenService.getToken()}` 
        });
        return this.http.get(_url, { headers });
    }

    gFN_PostApiCall(_url : string, _data : any): Observable<any> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this._tokenService.getToken()}`
        });
        return this.http.post(_url, _data,{headers});
    }

    gFN_DeleteApiCall(_url : string, _data : any) : Observable<any>{
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${this._tokenService.getToken()}` 
        });
        return this.http.delete(`${_url}/`, _data)
    }
}
