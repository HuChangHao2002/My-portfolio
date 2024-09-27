import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'blog', component: BlogComponent },
  { path: 'blog/:id', component: BlogDetailComponent }
];

export const AppRoutingModule = RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
});
