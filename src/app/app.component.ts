 import { Component } from '@angular/core';
import { HeaderComponent } from './pages/header/header.component';
import { RegisterComponent } from './pages/register/register.component';
import { ViewAllComponent } from './pages/view-all/view-all.component';
import { StudentProfileComponent } from './pages/student-profile/student-profile.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent,RegisterComponent,ViewAllComponent,StudentProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-app';
}
