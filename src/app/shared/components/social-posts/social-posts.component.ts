import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/social';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  posts: Post[] = [
    {title: "Angular is Great", thoughts: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut tortor pretium viverra suspendisse potenti nullam ac tortor. Tincidunt dui ut ornare lectus sit amet est placerat in."},
    {title: "Coding is so Fun!", thoughts: "Nisi est sit amet facilisis magna. Sit amet mattis vulputate enim. Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Cras adipiscing enim eu turpis egestas pretium aenean pharetra magna. Justo donec enim diam vulputate ut pharetra. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Diam phasellus vestibulum lorem sed risus ultricies."},
    {title: "Another test weeeeee", thoughts: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue ut lectus arcu bibendum at varius. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Pulvinar neque laoreet suspendisse interdum consectetur libero. Egestas quis ipsum suspendisse ultrices. Mi proin sed libero enim sed faucibus turpis in eu. Malesuada fames ac turpis egestas maecenas pharetra convallis. Suspendisse faucibus interdum posuere lorem. Integer feugiat scelerisque varius morbi enim. Proin libero nunc consequat interdum varius."}
  ];

  showPostForm: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSumbit(post: Post) {
    this.posts.unshift(post);
    this.showPostForm = false;
  }

  onDelete(i: number) {
    this.posts.splice(i, 1);
  }

}
