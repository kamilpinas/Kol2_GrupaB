import { Component, OnInit } from '@angular/core';
import {KPDataService} from '../../services/kp-data.service';
@Component({
  selector: 'kp-forum',
  templateUrl: './kp-forum.component.html',
  styleUrls: ['./kp-forum.component.css']
})
export class KPForumComponent implements OnInit {
  public items: any;

  constructor(private dataService:KPDataService) {
    this.dataService
    .getAll()
    .subscribe((value: any) => this.items = value)
   }

  ngOnInit(): void {
  }

}
