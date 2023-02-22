import { Component, OnInit } from '@angular/core';
import { USer } from './user';
import { NgModule } from '@angular/core';
import { UserService } from '../user.service';
import { list } from '../tab';
import { Utilisateur } from './utilisateur';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  utils = new USer();
  ut: any;

  constructor (private service: UserService){
  }
  ngOnInit(): void { }
 
  ajouter(){
    let u = new Utilisateur();

    u.email = this.utils.email;
    u.password = this.utils.adresse;
  
    let t = this.service.add(u);
    t.subscribe((data)=>this.ut=data);
    this.utils.adresse = '';
    this.utils.email= '';
    this.utils.prenom = '';
    this.utils.nom='';
    this.service.get();

  }
}
