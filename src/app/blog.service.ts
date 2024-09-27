// blog.service.ts
import { Injectable } from '@angular/core';
import { BlogPost } from './models/blog-post.model';

@Injectable({
  providedIn: 'root', // This makes the service available throughout the application
})
export class BlogService {
  blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Understanding Angular',
      excerpt: 'A deep dive into Angular features and best practices.',
      content: 'In this blog post, we will explore the various features of Angular...',
    },
    {
      id: 2,
      title: 'Getting Started with TypeScript',
      excerpt: 'TypeScript offers strong typing, which helps in developing large applications.',
      content: 'TypeScript is a superset of JavaScript that compiles to plain JavaScript...',
    },
    {
      id: 3,
      title: 'Building Responsive Web Applications',
      excerpt: 'Learn how to make your web applications responsive using CSS frameworks.',
      content: 'Responsive design is essential in today’s web development landscape...',
    },
  ];

  getBlogPosts(): BlogPost[] {
    return this.blogPosts;
  }

  getBlogPostById(id: number): BlogPost | undefined {
    return this.blogPosts.find(post => post.id === id);
  }
}
