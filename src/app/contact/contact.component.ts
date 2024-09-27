import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm : FormGroup;

  constructor( private fb: FormBuilder ){
    this.contactForm = this.fb.group({
      name: ['',Validators.required],
      email:['',[Validators.required, Validators.email]],
      message:['',Validators.required]
    });
  }

  onSubmit(){
    if(this.contactForm.valid){
      const formData = this.contactForm.value;
      alert(`Thank you for your message, ${formData.name}! We will get back to you soon.`);
      window.location.reload();
    }
  }
}
