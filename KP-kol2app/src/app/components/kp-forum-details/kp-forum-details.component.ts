import { Component, OnInit } from '@angular/core';
import { KPDataService } from 'src/app/services/kp-data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'kp-forum-details',
  templateUrl: './kp-forum-details.component.html',
  styleUrls: ['./kp-forum-details.component.css']
})
export class KPForumDetailsComponent implements OnInit {

  text : string | undefined;
  title : string | undefined;
  image:string|undefined;

  constructor(private dataService : KPDataService, private router: ActivatedRoute) {
    this.router.paramMap.subscribe(param => {
      let id = param.get('id');
      this.dataService.getById(id).subscribe((val:any)=>{
        this.text = val.text;
        this.title = val.title;
        this.image = val.image;
      })
    })
   }

  ngOnInit(): void {
  }

}
