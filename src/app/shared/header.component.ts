import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header class="header">
      <div class="container">
        <div class="header-content">
          <div class="logo">
            <h1>🏥 Maha Endocrine & Cardiac Clinic</h1>
          </div>
          <nav class="nav">
            <ul class="nav-list">
              <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a></li>
              <li><a routerLink="/about" routerLinkActive="active">About</a></li>
              <li><a routerLink="/services" routerLinkActive="active">Services</a></li>
              <li><a routerLink="/appointment" routerLinkActive="active">Appointment</a></li>
              <li><a routerLink="/contact" routerLinkActive="active">Contact</a></li>
            </ul>
          </nav>
          <div class="contact-info">
            <a href="tel:+918125609966" class="phone-btn">📞 +91 9550 899 143</a>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .header {
      background-color: #2c3e50;
      color: white;
      padding: 1rem 0;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo h1 {
      margin: 0;
      font-size: 1.5rem;
      color: #3498db;
    }

    .nav-list {
      list-style: none;
      display: flex;
      gap: 2rem;
      margin: 0;
      padding: 0;
    }

    .nav-list a {
      color: white;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .nav-list a:hover,
    .nav-list a.active {
      color: #3498db;
    }

    .phone-btn {
      background-color: #e74c3c;
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      text-decoration: none;
      transition: background-color 0.3s ease;
    }

    .phone-btn:hover {
      background-color: #c0392b;
    }

    @media (max-width: 768px) {
      .header-content {
        flex-direction: column;
        gap: 1rem;
      }

      .nav-list {
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
      }
    }
  `]
})
export class HeaderComponent {}
