import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../../models/social';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  post: Post ={title: '', thoughts: ''}
  @Output() submitted = new EventEmitter<Post>();

  constructor() { }

  ngOnInit(): void {
  }

  submitPost() {
    this.submitted.emit(this.post);
  }

}
