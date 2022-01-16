import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {

  form!: FormGroup;
  constructor(private postService: PostService, private _router:Router) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      title: new FormControl(null,[Validators.required,Validators.maxLength(10)]),
      description: new FormControl(null,[Validators.required]),
      imgPath: new FormControl(null,[Validators.required]),
      author: new FormControl(null,[Validators.required,Validators.maxLength(25)]),
    });
  }
  addPost(){
    console.log(this.form);
    this.postService.addPost(new Post(this.form.value.title as string,this.form.value.description as string,this.form.value.imgPath as string,this.form.value.author as string,new Date(),0))
    this._router.navigateByUrl('');
  }
}
