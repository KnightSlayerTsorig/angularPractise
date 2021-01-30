import {Component, Input, OnInit} from '@angular/core';
import {IPost} from '../../interfaces/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postBody: boolean;

  @Input()
  post: IPost;


  constructor() {
  }

  ngOnInit(): void {
  }

  postShowBody(): boolean {
    return this.postBody = !this.postBody;
  }

}
