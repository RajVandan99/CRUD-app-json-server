import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { PostsComponent } from './shared/components/posts/posts.component';
import { SinglePostComponent } from './shared/components/single-post/single-post.component';
import { FormComponent } from './shared/components/form/form.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'posts', component:PostsComponent},
  {path:'posts/:id', component:SinglePostComponent},
  {path:'create', component:FormComponent},
  {path:'create/:id', component:FormComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
