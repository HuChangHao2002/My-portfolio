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
      content: `
        In this blog post, we will explore the various features of Angular, a platform and framework for building single-page client applications using HTML and TypeScript.
        
        Angular provides a comprehensive set of tools to build scalable applications. With its component-based architecture, developers can create reusable components that help in managing the complexity of large applications. 
    
        We'll cover topics such as Angular modules, dependency injection, routing, and the powerful reactive programming features provided by RxJS.
    
        By the end of this post, you will understand how to leverage Angular's features to improve your development workflow and build robust applications.
      `,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png',
    },
    {
      id: 2,
      title: 'Getting Started with TypeScript',
      excerpt: 'TypeScript offers strong typing, which helps in developing large applications.',
      content: `
        TypeScript is a superset of JavaScript that compiles to plain JavaScript. It offers static typing, which helps developers identify errors during development rather than at runtime.
    
        In this post, we will discuss how to get started with TypeScript. We'll go through the installation process, setting up a TypeScript project, and the basic syntax.
    
        We will also explore key features such as interfaces, enums, and generics, which enhance code maintainability and readability. 
    
        By the end of this post, you will have a solid understanding of how to write TypeScript code and integrate it into your existing JavaScript projects.
      `,
      imageUrl: 'https://miro.medium.com/v2/resize:fit:1200/1*VTW6T-7KkQHPjf4mtfQ0Zg.png',
    },
    {
      id: 3,
      title: 'Building Responsive Web Applications',
      excerpt: 'Learn how to make your web applications responsive using CSS frameworks.',
      content: `
        Responsive design is essential in today’s web development landscape, as users access applications on various devices with different screen sizes.
    
        In this blog post, we will learn how to create responsive web applications using CSS frameworks like Bootstrap and Tailwind CSS. 
    
        We will cover the grid systems, media queries, and utility classes that allow you to build flexible layouts. Additionally, we will explore best practices for ensuring that your applications provide a seamless experience across all devices.
    
        By the end of this post, you'll be equipped with the knowledge to implement responsive designs that enhance user experience and engagement.
      `,
      imageUrl: 'https://www.urteqi.com/assets/images/blog/3rdblog.jpg',
    },
    
    {
      id: 4,
      title: "The Evolution of the Honda Civic: A Timeless Classic",
      excerpt: "Discover the rich history and evolution of the Honda Civic, a car that has captured the hearts of enthusiasts and everyday drivers alike.",
      content: `The Honda Civic has been a staple in the automotive world since its debut in 1972. Renowned for its reliability, efficiency, and fun-to-drive nature, the Civic has grown from a compact economy car into a beloved vehicle for all kinds of drivers.
  
      The First Generation (1972-1979):  
      Launched as a two-door model, the first-generation Civic quickly made a name for itself. Its small size, efficient engine, and affordability made it an attractive choice during the oil crisis of the 1970s.
  
      The Iconic ‘80s and ‘90s:  
      Throughout the ‘80s, the Civic evolved with new designs, including the introduction of the hatchback variant. By the ‘90s, the Civic was a popular choice for tuners and racers, thanks to its lightweight and versatile platform.
  
      Modern Innovations:  
      Today, the Honda Civic is available in various trims and body styles, featuring cutting-edge technology and advanced safety features. From the sport-oriented Civic Si to the eco-friendly Civic Hybrid, there’s a Civic for every driver.
  
      Conclusion:  
      The Honda Civic continues to impress with its blend of performance, efficiency, and style. As it looks to the future, it remains a top choice for those seeking a reliable and fun vehicle.`,
      imageUrl: "https://evault.honda.com.my/pixelvault/2022-07/553b2b3863d228aad0a89ec272a0d549fd0d43fe43419.png"
    },
  ];

  getBlogPosts(): BlogPost[] {
    return this.blogPosts;
  }

  getBlogPostById(id: number): BlogPost | undefined {
    return this.blogPosts.find(post => post.id === id);
  }
}
