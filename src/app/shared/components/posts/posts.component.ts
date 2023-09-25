import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Ipost } from '../../model/posts.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  postsAray:Array<Ipost> = [];
  constructor(
    private _postService:PostsService,
    private _router:Router
    ) { }

  ngOnInit(): void {
    this._postService.gelAllpost()
    .subscribe(
      (res)=>{
        console.log(res);
        this.postsAray = res;
      },
      (err)=>{console.log('Something went wrong');
      }
    )
  }
}
