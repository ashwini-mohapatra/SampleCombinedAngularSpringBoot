import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post?: Post;
  @Input() id?: number = 0;
  constructor(private postService:PostService) { }

  
  ngOnInit(): void {
    console.log(this.post);
  }

  deletePosts(){
    console.log(this.id);
    this.postService.deletePost(this.id as number);
    //this.postService.deletePost(this.index);
  }
  
}
