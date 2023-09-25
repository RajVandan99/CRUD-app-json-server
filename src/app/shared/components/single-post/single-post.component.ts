import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { Ipost } from '../../model/posts.interface';
import { concatMap } from 'rxjs';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {
postId!:number;
postObj!:Ipost;
  constructor(
    private _route:ActivatedRoute,
    private _postService:PostsService,
    private _router:Router
  ) { }

  ngOnInit(): void {
    this._route.params
    .pipe(
      concatMap((params:Params)=>{
      const postId:number = +params['id'];
      this.postId = postId;
      return this._postService.getPost(postId)
      })
    )
    .subscribe(
      (res)=>{
        console.log(res);
        this.postObj = res
      }
    )
    // .subscribe(
    //   (params:Params)=> {
    //     this.postId = +params['id'];
    //     console.log(this.postId);
    //   } )
    // this._postService.getPost(this.postId)
    // .subscribe(
    //   (res) => {
    //     console.log(res);
    //     this.postObj = res;
    //   },
    //   (err)=>{console.log('Something went wrong');
    //   }
    // )
  }
  onDeletePost(){
  this._postService.deletePost(this.postId)
  .subscribe(
   (res) =>{
    console.log(res);
    this._router.navigate(['/posts'])
  },
   (err) => {
    console.log('something went wrong')
  }
  )
  }
}
