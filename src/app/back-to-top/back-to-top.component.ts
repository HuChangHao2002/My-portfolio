import { Component , HostListener} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './back-to-top.component.html',
  styleUrl: './back-to-top.component.css'
})
export class BackToTopComponent {
  isVisible = false;

  @HostListener('window:scroll',[])
  onWindowScroll(){
    this.isVisible = window.scrollY > 300;
  }

  scrollToTop(){
    window.scrollTo ({ top: 0, behavior:'smooth' });
  }
}
