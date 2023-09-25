import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { PostsComponent } from './shared/components/posts/posts.component';
import { HomeComponent } from './shared/components/home/home.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SinglePostComponent } from './shared/components/single-post/single-post.component';
import { FormComponent } from './shared/components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { InterceptorService } from './shared/services/interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostsComponent,
    HomeComponent,
    SinglePostComponent,
    FormComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
