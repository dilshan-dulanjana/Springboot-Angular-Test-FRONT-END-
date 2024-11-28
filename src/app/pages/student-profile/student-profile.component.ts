import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-student-profile',
  imports: [FormsModule,CommonModule],
  templateUrl: './student-profile.component.html',
  styleUrl: './student-profile.component.css'
})
export class StudentProfileComponent  {
  student = {
    id: '',
    studentName: '',
    studentAge: '',
    studentContact: '',
    guardianName: '',
    gurdianAdderss: '',
    gurdianContact: '',
  };

  constructor(private http: HttpClient) {}

  onUpdate() {
    const inputElement = document.getElementById('studentID') as HTMLInputElement;
    const id = inputElement.value;
    const searchLong = Number(id);
  
    if (isNaN(searchLong)) {
      console.error('Invalid student ID');
      return;
    }
  

    fetch(`http://localhost:8080/updateStudent/id?id=${encodeURIComponent(searchLong)}`, {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.student),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Student updated successfully!', data);
      })

  }
  



  getStudentBySearch() {
    const inputElement = document.getElementById('searchInput') as HTMLInputElement;
    const search = inputElement.value; 
  
  
    const searchLong = Number(search); 
  
    if (!isNaN(searchLong)) {
      const url = `http://localhost:8080/searchStudent/id?id=${encodeURIComponent(searchLong)}`;
      
      fetch(url)
        .then(response => response.json())
        .then((data) => {
          this.student = data; 
          console.log('Data fetched successfully:', data);
        })
       
    } 
  }
  


  deleteStudent() {
    const inputElement = document.getElementById('studentID') as HTMLInputElement;
    const search = inputElement.value;
  
    const searchLong = Number(search);
  
    if (!isNaN(searchLong)) {
      const url = `http://localhost:8080/deleteStudent/id?id=${encodeURIComponent(searchLong)}`;
  
      fetch(url, {
        method: 'DELETE',  // Use DELETE method
      })
        .then(response =>response.json()) 
        .then((data) => {
          console.log('Delete successfully:', data);
        })

    } 
 
  }

}
