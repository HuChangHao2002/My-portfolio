import { Component } from '@angular/core';
import { BlogPost } from '../models/blog-post.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})

export class BlogComponent {
  blogPosts: BlogPost[];

  constructor(private blogService: BlogService) {
    this.blogPosts = this.blogService.getBlogPosts();
  }
}
