
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'], 
})
export class RegisterComponent {
  student = {
    studentName: '',
    studentAge: '',
    studentContact: '',
    guardianName: '',
    gurdianAdderss: '',
    gurdianContact: '',
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    fetch('http://localhost:8080/student', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.student),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Student registered successfully!', data);
      })
     
  }
}
