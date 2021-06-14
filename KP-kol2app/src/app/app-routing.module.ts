import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KPForumDetailsComponent } from './components/kp-forum-details/kp-forum-details.component';
import { KPForumComponent } from './components/kp-forum/kp-forum.component';

const routes: Routes = [
  {
	    path: '',
  	  component: KPForumComponent,
  },
  {
      path: 'posts/:id',
	    component: KPForumDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
