import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>About Us</h3>
            <p>We provide world class comprehensive one stop solution to all hormone related problems. We are your only destination for all diabetes, thyroid, and hormone related problems.</p>
          </div>
          <div class="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/appointment">Book Appointment</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>Contact Info</h3>
            <p>📍 JCWV+29C Tirupati, Andhra Pradesh</p>
            <p>📞 +91 9550 899 143</p>
            <p>✉️ drlikitha1989@gmail.com</p>
          </div>
          <div class="footer-section">
            <h3>Follow Us</h3>
            <div class="social-links">
              <a href="#" target="_blank">Facebook</a>
              <a href="#" target="_blank">Instagram</a>
              <a href="#" target="_blank">LinkedIn</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 Maha Endocrine & Cardiac Clinic. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background-color: #2c3e50;
      color: white;
      padding: 3rem 0 1rem;
      margin-top: 3rem;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .footer-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .footer-section h3 {
      color: #3498db;
      margin-bottom: 1rem;
    }

    .footer-section p {
      margin: 0.5rem 0;
      line-height: 1.6;
    }

    .footer-section ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .footer-section ul li {
      margin-bottom: 0.5rem;
    }

    .footer-section a {
      color: #ecf0f1;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .footer-section a:hover {
      color: #3498db;
    }

    .social-links {
      display: flex;
      gap: 1rem;
    }

    .footer-bottom {
      text-align: center;
      padding-top: 2rem;
      border-top: 1px solid #34495e;
      color: #95a5a6;
    }

    @media (max-width: 768px) {
      .footer-content {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class FooterComponent {}
