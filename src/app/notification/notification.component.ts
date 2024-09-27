import { Component , OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent implements OnInit{
  isVisible = false;
  message = '';

  constructor(){}

  ngOnInit(): void {
      
  }

  show(message:string){
    this.message = message;
    this.isVisible = true;

    setTimeout(() => {
      this.close();
    }, 3000);
  }

  close() {
    this.isVisible = false;
  }
}
