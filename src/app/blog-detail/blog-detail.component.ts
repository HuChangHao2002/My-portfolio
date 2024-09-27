import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from '../models/blog-post.model';
import { BlogService } from '../blog.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})

export class BlogDetailComponent implements OnInit {
  post!: BlogPost;

  constructor(private route: ActivatedRoute, private blogService: BlogService) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.post = this.blogService.getBlogPostById(id)!; 
  }
}
