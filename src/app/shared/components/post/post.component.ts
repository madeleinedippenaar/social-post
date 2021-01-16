import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../../models/social';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Post = {title: '', thoughts: ''}
  @Output() deleted = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete() {
    this.deleted.emit();
  }

}
