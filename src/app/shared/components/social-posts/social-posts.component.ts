import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/social';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  posts: Post[] = [
    {title: 'test', thoughts: 'test'}
  ];

  showPostForm: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSumbit(post: Post) {
    this.posts. push(post);
  }

  onDelete(post: Post) {

  }

}
