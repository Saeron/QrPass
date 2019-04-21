import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})
export class AccessComponent implements OnInit {


  message: String;
  email: String;
  key: String;

  constructor(private datos: DbService) {
   }

  ngOnInit() {}

  getIn(){
    this.datos.getAccess(this.email,this.key).subscribe(
      data => {
        if(data.success){
          this.message=data.message;
          console.log(data.message);
        }else{
          alert(data.message);
        }
      }
    );
  }

}
