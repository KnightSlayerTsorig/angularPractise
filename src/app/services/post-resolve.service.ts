import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import {IPost} from '../interfaces/posts.interface';
import {Observable} from 'rxjs';
import {PostService} from './post.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolveService implements Resolve <IPost[]>{

  constructor(private postService: PostService) { }

  resolve(): Observable<IPost[]> | Promise<IPost[]> | IPost[] {
    return this.postService.getPosts();
  }

}
