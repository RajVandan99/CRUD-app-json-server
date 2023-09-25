import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Ipost } from '../model/posts.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
allPostsUrl:string = `${environment.baseUrl}/posts`
  constructor(
    private _http:HttpClient
  ) { }

  gelAllpost():Observable<Array<Ipost>>{
    return this._http.get<Array<Ipost>>(this.allPostsUrl)
  }
  getPost(id:number):Observable<any>{
    let postUrl:string=`${this.allPostsUrl}/${id}`
    return this._http.get<any>(postUrl)
  }
  createPost(post:Ipost):Observable<any>{
    // let createUrl = `${environment.baseUrl}/posts`
    return this._http.post<any>(this.allPostsUrl, post)
  }
  updatePost(post:Ipost):Observable<Ipost>{
    let updateUrl = `${environment.baseUrl}/posts/${post.id}`;
    return this._http.patch<Ipost>(updateUrl, post)
  }
  deletePost(id:number):Observable<void>{
    let deleteUrl = `${environment.baseUrl}/posts/${id}`;
    return this._http.delete<void>(deleteUrl)
  }
}
