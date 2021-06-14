import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'kp-forum-item',
  templateUrl: './kp-forum-item.component.html',
  styleUrls: ['./kp-forum-item.component.css']
})
export class KPForumItemComponent implements OnInit {

  @Input() id: string | undefined;
  @Input() title: string| undefined;;
  @Input() text: string| undefined;;
  @Input() image: string| undefined;;

  constructor() { }

  ngOnInit(): void {
  }

}
