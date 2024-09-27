import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { BackToTopComponent } from './back-to-top/back-to-top.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [
        HomeComponent, 
        AboutComponent, 
        ProjectsComponent, 
        ContactComponent , 
        HeaderComponent,
        RouterModule,
        FooterComponent,
        BackToTopComponent
    ],
    standalone: true,
})
export class AppComponent { }