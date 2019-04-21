import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PhpResponse } from './php-response';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private http: HttpClient) { }

  getAccess(mail,key){
    return this.http.post<PhpResponse>("api/getConf.php",{
      email: mail,
      hash: key
    });
  }
}
