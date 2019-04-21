import { Component, OnInit } from '@angular/core';
import { QrService } from '../qr.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imagen: any;
  imageBlobUrl: any;
  email: String;

  constructor(private qr: QrService, private router: Router) { }

  ngOnInit() {
  }


  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.imagen = reader.result;
    }, false);
    if (image) {
      reader.readAsDataURL(image);
    }
  }

  getImage() {
    
    if (this.email == null || this.email=="") {
      alert("An email is required");
    } else {
      this.qr.getQRimage(this.email).subscribe(
        data => {
          this.createImageFromBlob(data);
        }
      );
    }
  }

  getIn() {
    this.router.navigate(["access"]);
  }
}
