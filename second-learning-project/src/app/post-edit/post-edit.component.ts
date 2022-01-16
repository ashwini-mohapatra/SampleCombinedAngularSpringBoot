import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  // public author? :string;
  // public title? :string;
  // public description? :string;
  // public img? :string;
  form!: FormGroup;
  posti?: Post;
  index: number = 0;
  constructor(private postService: PostService, private _router:ActivatedRoute, private rout:Router) { }

  ngOnInit(): void {
    let title = '';
    let desc = '';
    let auth = '';
    let img = '';
    let likes = 0;
    this._router.params.subscribe((param:Params) => {
        if(param['index']){
          console.log(param['index']);
          this.index=param['index'];
          this.posti=this.postService.getPosts(this.index);
          title=this.posti.title;
          desc=this.posti.description;
          img=this.posti.imgPath;
          auth=this.posti.author;
          likes=this.posti.likes;
        }
    });
    this.form=new FormGroup({
      title: new FormControl(title,[Validators.required,Validators.maxLength(10)]),
      description: new FormControl(desc,[Validators.required]),
      imgPath: new FormControl(img,[Validators.required]),
      author: new FormControl(auth,[Validators.required,Validators.maxLength(25)]),
      likes: new FormControl(likes)
    });
  }

  editPost(){
  console.log(this.form);
  this.postService.updatePost(this.index as number,new Post(this.form.value.title as string,this.form.value.description as string,this.form.value.imgPath as string,this.form.value.author as string,new Date(),this.form.value.likes))
  this.rout.navigateByUrl('');
}
}
