import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';
import { Department, Clinic, Doctor } from '../models/clinic.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="home">
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-content">
          <h1>Welcome to Maha Endocrine & Cardiac Clinic</h1>
          <p>Specialized Care for Cardiac,Diabetes, Thyroid & Endocrine Disorders</p>
          <button class="cta-btn" (click)="scrollToAppointment()">Book an Appointment</button>
        </div>
      </section>

      <!-- Stats Section -->
      <section class="stats">
        <div class="container">
          <h2>Why Choose Hormone Clinic?</h2>
          <div class="stats-grid">
            <div *ngFor="let stat of stats" class="stat-card">
              <h3>{{ stat.value }}</h3>
              <p>{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Departments Section -->
      <section class="departments">
        <div class="container">
          <h2>Our Departments</h2>
          <div class="departments-grid">
            <div *ngFor="let dept of departments" class="dept-card">
              <div class="dept-icon">{{ dept.icon }}</div>
              <h3>{{ dept.name }}</h3>
              <p>{{ dept.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- About Doctor Section -->
      <section class="doctor-section" *ngIf="doctor">
        <div class="container">
          <div class="doctor-content">
            <div class="doctor-image">
              <img src="https://via.placeholder.com/300x400?text=Dr+Likitha+B" alt="Dr. Likitha B">
            </div>
            <div class="doctor-info">
              <h2>{{ doctor?.name }}</h2>
              <p class="title">{{ doctor?.title }}</p>
              <p class="experience">{{ doctor?.experience }} of Experience</p>
              <p class="bio">{{ doctor?.bio }}</p>
              <div class="specialties">
                <h4>Specialties:</h4>
                <ul>
                  <li *ngFor="let specialty of doctor?.specialties || []">✓ {{ specialty }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Specialized Clinics Section -->
      <section class="clinics">
        <div class="container">
          <h2>Our Specialized Clinics</h2>
          <p class="section-subtitle">We provide world class comprehensive one stop solution to all hormone related problems.</p>
          <div class="clinics-grid">
            <div *ngFor="let clinic of clinics" class="clinic-card">
              <div class="clinic-image">
                <img src="https://via.placeholder.com/300x200?text={{ clinic.name }}" alt="{{ clinic.name }}">
              </div>
              <h3>{{ clinic.name }}</h3>
              <p>{{ clinic.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="cta-section">
        <div class="container">
          <h2>Ready to take control of your health?</h2>
          <p>Contact us today to book your appointment with Dr. Likitha B</p>
          <button class="cta-btn" (click)="scrollToAppointment()">Schedule Appointment</button>
          <p class="contact-info">📞 +91 9550 899 143</p>
        </div>
      </section>
    </main>
  `,
  styles: [`
    .home {
      min-height: 100vh;
    }

    .hero {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 6rem 2rem;
      text-align: center;
      min-height: 400px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .hero-content h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .hero-content p {
      font-size: 1.3rem;
      margin-bottom: 2rem;
    }

    .cta-btn {
      background-color: #e74c3c;
      color: white;
      border: none;
      padding: 1rem 2rem;
      font-size: 1rem;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .cta-btn:hover {
      background-color: #c0392b;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .stats {
      background-color: #ecf0f1;
      padding: 3rem 0;
    }

    .stats h2 {
      text-align: center;
      margin-bottom: 2rem;
      color: #2c3e50;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
    }

    .stat-card {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      text-align: center;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    .stat-card h3 {
      font-size: 2.5rem;
      color: #3498db;
      margin: 0;
    }

    .stat-card p {
      color: #7f8c8d;
      margin: 0.5rem 0 0 0;
    }

    .departments {
      padding: 3rem 0;
    }

    .departments h2 {
      text-align: center;
      margin-bottom: 2rem;
      color: #2c3e50;
    }

    .departments-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .dept-card {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      text-align: center;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
    }

    .dept-card:hover {
      transform: translateY(-5px);
    }

    .dept-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .dept-card h3 {
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    .dept-card p {
      color: #7f8c8d;
      line-height: 1.6;
    }

    .doctor-section {
      background-color: #f8f9fa;
      padding: 3rem 0;
    }

    .doctor-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: center;
    }

    .doctor-image img {
      width: 100%;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }

    .doctor-info h2 {
      color: #2c3e50;
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }

    .doctor-info .title {
      color: #3498db;
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    .doctor-info .experience {
      color: #e74c3c;
      font-weight: bold;
      margin-bottom: 1rem;
    }

    .doctor-info p {
      color: #7f8c8d;
      line-height: 1.8;
      margin-bottom: 1rem;
    }

    .specialties h4 {
      color: #2c3e50;
      margin-top: 1rem;
    }

    .specialties ul {
      list-style: none;
      padding: 0;
      margin: 0.5rem 0;
    }

    .specialties li {
      color: #7f8c8d;
      margin: 0.5rem 0;
    }

    .clinics {
      padding: 3rem 0;
    }

    .clinics h2 {
      text-align: center;
      margin-bottom: 0.5rem;
      color: #2c3e50;
    }

    .section-subtitle {
      text-align: center;
      color: #7f8c8d;
      margin-bottom: 2rem;
      font-size: 1.1rem;
    }

    .clinics-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }

    .clinic-card {
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
    }

    .clinic-card:hover {
      transform: translateY(-5px);
    }

    .clinic-image img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    .clinic-card h3 {
      padding: 1rem 1rem 0.5rem;
      color: #2c3e50;
      margin: 0;
    }

    .clinic-card p {
      padding: 0 1rem 1rem;
      color: #7f8c8d;
      margin: 0;
      line-height: 1.6;
    }

    .cta-section {
      background-color: #2c3e50;
      color: white;
      padding: 3rem 0;
      text-align: center;
    }

    .cta-section h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    .cta-section p {
      margin-bottom: 2rem;
      font-size: 1.1rem;
    }

    .contact-info {
      font-size: 1.2rem;
      margin-top: 1rem;
    }

    @media (max-width: 768px) {
      .hero-content h1 {
        font-size: 2rem;
      }

      .doctor-content {
        grid-template-columns: 1fr;
      }

      .departments-grid {
        grid-template-columns: 1fr;
      }

      .clinics-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class HomeComponent implements OnInit {
  departments: Department[] = [];
  clinics: Clinic[] = [];
  doctor: Doctor | undefined;
  stats: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.departments = this.dataService.getDepartments();
    this.clinics = this.dataService.getSpecializedClinics();
    this.doctor = this.dataService.getDoctor();
    this.stats = this.dataService.getClinicStats();
  }

  scrollToAppointment() {
    // In a real app, this would use smooth scroll to appointment section
    console.log('Scroll to appointment');
  }
}
