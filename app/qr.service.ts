import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QrService {

  constructor(private http: HttpClient) { }

  getQRimage(mail: String) {
    return this.http.post("/api/getQrCode.php", {
      email: mail
    }, { responseType: 'blob' });
  }

}
