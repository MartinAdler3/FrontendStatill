import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';
  error = false;

  constructor(private auth: AuthService, private router: Router) {}

  login(): void {
    const success = this.auth.login(this.username, this.password);
    if (success) {
      this.error = false;
      this.router.navigate(['/']);
    } else {
      this.error = true;
    }
  }
}
