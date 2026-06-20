import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="contact">
      <section class="hero">
        <div class="container">
          <h1>Contact Us</h1>
          <p>Get in touch with our clinic</p>
        </div>
      </section>

      <section class="contact-content">
        <div class="container">
          <div class="contact-grid">
            <div class="contact-form">
              <h2>Send us a Message</h2>
              <form>
                <div class="form-group">
                  <label for="name">Your Name</label>
                  <input type="text" id="name" placeholder="Enter your name" required>
                </div>
                <div class="form-group">
                  <label for="email">Email Address</label>
                  <input type="email" id="email" placeholder="Enter your email" required>
                </div>
                <div class="form-group">
                  <label for="phone">Phone Number</label>
                  <input type="tel" id="phone" placeholder="Enter your phone number" required>
                </div>
                <div class="form-group">
                  <label for="subject">Subject</label>
                  <input type="text" id="subject" placeholder="Enter subject" required>
                </div>
                <div class="form-group">
                  <label for="message">Message</label>
                  <textarea id="message" rows="5" placeholder="Enter your message" required></textarea>
                </div>
                <button type="submit" class="submit-btn">Send Message</button>
              </form>
            </div>

            <div class="contact-info-section">
              <h2>Contact Information</h2>
              
              <div class="info-card">
                <h3>📍 Location</h3>
                <p>{{ contactInfo?.address }}</p>
              </div>

              <div class="info-card">
                <h3>📞 Phone</h3>
                <p>{{ contactInfo?.phone }}</p>
                <a href="tel:{{ contactInfo?.phone }}" class="call-btn">Call Now</a>
              </div>

              <div class="info-card">
                <h3>✉️ Email</h3>
                <p>{{ contactInfo?.email }}</p>
                <a href="mailto:{{ contactInfo?.email }}" class="email-btn">Send Email</a>
              </div>

              <div class="info-card">
                <h3>⏰ Business Hours</h3>
                <p>{{ contactInfo?.hours }}</p>
              </div>

              <div class="social-links">
                <h3>Follow Us</h3>
                <div class="links">
                  <a href="#" class="social-link">Facebook</a>
                  <a href="#" class="social-link">Instagram</a>
                  <a href="#" class="social-link">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="map-section">
        <div class="container">
          <h2>Find Us on Map</h2>
          <div class="map-container">
            <iframe
              src="https://maps.google.com/maps?q=17.3850,78.3699&z=17&output=embed"
              width="100%"
              height="400"
              style="border:0; border-radius: 8px;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            <p class="map-note">If the map does not display, <a href="https://maps.app.goo.gl/s6HXByNiaz8GUA2s5?g_st=iw" target="_blank" rel="noopener">open the location in Google Maps</a>.</p>
          </div>
        </div>
      </section>
    </main>
  `,
  styles: [`
    .contact {
      min-height: 100vh;
    }

    .hero {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 3rem 0;
    }

    .hero h1 {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
    }

    .hero p {
      font-size: 1.2rem;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .contact-content {
      padding: 3rem 0;
    }

    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
    }

    .contact-form {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    .contact-form h2 {
      color: #2c3e50;
      margin-bottom: 1.5rem;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      color: #2c3e50;
      font-weight: 500;
    }

    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #bdc3c7;
      border-radius: 4px;
      font-family: inherit;
      font-size: 1rem;
      box-sizing: border-box;
    }

    .form-group input:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: #3498db;
      box-shadow: 0 0 5px rgba(52, 152, 219, 0.3);
    }

    .submit-btn {
      background-color: #e74c3c;
      color: white;
      border: none;
      padding: 1rem;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
      width: 100%;
      transition: background-color 0.3s ease;
    }

    .submit-btn:hover {
      background-color: #c0392b;
    }

    .contact-info-section {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .contact-info-section h2 {
      color: #2c3e50;
    }

    .info-card {
      background: white;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      border-left: 4px solid #3498db;
    }

    .info-card h3 {
      color: #2c3e50;
      margin-bottom: 0.5rem;
    }

    .info-card p {
      color: #7f8c8d;
      margin: 0.5rem 0;
      line-height: 1.6;
    }

    .call-btn,
    .email-btn {
      display: inline-block;
      background-color: #e74c3c;
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      text-decoration: none;
      margin-top: 0.5rem;
      transition: background-color 0.3s ease;
    }

    .call-btn:hover,
    .email-btn:hover {
      background-color: #c0392b;
    }

    .social-links {
      background: white;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    .social-links h3 {
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    .links {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .social-link {
      background-color: #3498db;
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      text-decoration: none;
      transition: background-color 0.3s ease;
    }

    .social-link:hover {
      background-color: #2980b9;
    }

    .map-section {
      padding: 3rem 0;
      background-color: #f8f9fa;
    }

    .map-section h2 {
      text-align: center;
      color: #2c3e50;
      margin-bottom: 2rem;
    }

    .map-container {
      background: white;
      padding: 1rem;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    @media (max-width: 768px) {
      .contact-grid {
        grid-template-columns: 1fr;
      }

      .hero h1 {
        font-size: 2rem;
      }
    }
  `]
})
export class ContactComponent implements OnInit {
  contactInfo: any = {
    address: '',
    phone: '',
    email: '',
    hours: ''
  };

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.contactInfo = this.dataService.getContactInfo();
  }
}
