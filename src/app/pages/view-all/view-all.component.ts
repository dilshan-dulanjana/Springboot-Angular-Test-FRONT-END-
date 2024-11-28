import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-view-all',
  imports: [CommonModule],
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {
  students: any[] = []; 

  constructor(private http: HttpClient) {}

 
  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.http.get<any[]>('http://localhost:8080/getStudent') 
      .subscribe(
        (data) => {
          this.students = data;
          console.log('Data fetched successfully:', data);
        },
        (error) => {
          console.error('Error fetching data:', error);
        }
      );
  }
}
