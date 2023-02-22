import { Component, Input, OnInit } from '@angular/core';
import { list } from '../tab';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  @Input('service')
  service: any;
  listes:any

  constructor (private userservice: UserService){}

  ngOnInit(): void {
    this.listes = this.userservice.get().subscribe((data)=>this.listes=data);
    
  }
}
