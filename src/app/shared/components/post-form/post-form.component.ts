import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/social';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  post: Post = {title: '', thoughts: ''};

  constructor() { }

  ngOnInit(): void {
  }

}
