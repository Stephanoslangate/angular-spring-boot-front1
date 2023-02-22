import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  lien = 'http://localhost:8082/user';
  tabUtilservice:any = [];
  constructor(private http: HttpClient) { }

  public add(user:any){
     // this.tabUtilservice.push(user);
     return this.http.post(this.lien, user, 
      {responseType:'text' as 'json'});
  }
  public get(){
    return this.http.get(this.lien);
  }
  

}
