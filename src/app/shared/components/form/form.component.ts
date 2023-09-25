import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Ipost } from '../../model/posts.interface';
import { concatMap } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
postId!:number;
postForm!:FormGroup;
postObj!:Ipost;
  constructor(
    private _route:ActivatedRoute,
    private _postService:PostsService,
    private _fb:FormBuilder,
    private _router:Router
  ) { }

  ngOnInit(): void {
    this.createPost();
    this._route.params
    .pipe(
      concatMap((param:Params)=>{
        const postid = +param['id']
        this.postId = postid;
        return this._postService.getPost(postid)
      })
    )
    .subscribe(
      (res)=>{this.postForm.patchValue(res)}
    )
    // .subscribe((params:Params)=>{this.postId = +params['id']})
    //   if(this.postId){
    //     this._postService.getPost(this.postId)
    //     .subscribe(
    //     (res)=>{console.log(res);
    //     this.postObj=res;
    //     this.postForm.patchValue(this.postObj)
    //    })
    //   }
  }
  createPost(){
    this.postForm = this._fb.group({
      title: new FormControl(null, [Validators.required]),
      content: this._fb.control(null, [Validators.required])
    })
    console.log(this.postForm.value);
  }
  onPostSubmit(){
    if(this.postForm.valid){
      let postObj = {
        userId:Math.ceil(Math.random()*10),
        ...this.postForm.value,
        id:this.postId
      }
      // console.log(postObj);
      if(this.postId){
      this._postService.updatePost(postObj)
      .subscribe(
        (res)=>{console.log(res);
          this._router.navigate(['/posts']);
        }
      )}
      else{
      this._postService.createPost(postObj)
      .subscribe(
      (res) => {console.log(res);
      this._router.navigate(['/posts']);
      }
      )}
    }
    
  }
}
