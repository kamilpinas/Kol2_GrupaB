import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class KPDataService {

private url = 'https://kol2tai.herokuapp.com/api/forum/';

  constructor(private http:HttpClient) { }
  getAll(){
     return this.http.get(this.url+'posts');
   }
    getById(id: string | null){
    return this.http.get(this.url +"posts/"+ id);
  }
}
