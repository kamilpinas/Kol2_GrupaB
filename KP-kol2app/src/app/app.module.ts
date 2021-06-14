import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KPForumComponent } from './components/kp-forum/kp-forum.component';
import { KPForumItemComponent } from './components/kp-forum-item/kp-forum-item.component';
import { KPForumDetailsComponent } from './components/kp-forum-details/kp-forum-details.component';
import {KPDataService} from './services/kp-data.service';

@NgModule({
  declarations: [
    AppComponent,
    KPForumComponent,
    KPForumItemComponent,
    KPForumDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    KPDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
