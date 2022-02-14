import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post/post.model';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  post: Post = {
    Description: ''
  };

  submitted = false;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  savePost(): void {
    const data = {
      Description: this.post.Description
    };
    this.postService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newPost(): void {
    this.submitted = false;
    this.post = {
      Description: ''
    };
  }

}
