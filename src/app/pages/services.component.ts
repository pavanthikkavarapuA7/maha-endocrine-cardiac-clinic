import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';
import { Department } from '../models/clinic.model';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="services">
      <section class="hero">
        <div class="container">
          <h1>Our Services & Departments</h1>
          <p>Comprehensive care for all endocrine and metabolic disorders</p>
        </div>
      </section>

      <section class="services-content">
        <div class="container">
          <div class="services-grid">
            <div *ngFor="let dept of departments" class="service-card">
              <div class="service-icon">{{ dept.icon }}</div>
              <h2>{{ dept.name }}</h2>
              <p>{{ dept.description }}</p>
              <button class="learn-more">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      <section class="clinics-section">
        <div class="container">
          <h2>Our Specialized Clinics</h2>
          <p class="intro">We provide world class comprehensive one stop solution to all hormone related problems.</p>
          <div class="clinics-content">
            <div class="clinic-item">
              <h3>Diabetes Clinic</h3>
              <p>Early specialty care and education for diabetes management with easy access to renowned specialities.</p>
            </div>
            <div class="clinic-item">
              <h3>Thyroid Clinic</h3>
              <p>Complete diagnostic and treatment services for all forms of thyroid disorders with expert endocrinologists and surgeons.</p>
            </div>
            <div class="clinic-item">
              <h3>Endocrine Surgery</h3>
              <p>Surgical care of thyroid, parathyroid, adrenal, and neuroendocrine tumours with expertise in complex cases.</p>
            </div>
            <div class="clinic-item">
              <h3>Obesity Clinic</h3>
              <p>Comprehensive obesity management with awareness and treatment programs for weight management.</p>
            </div>
            <div class="clinic-item">
              <h3>Paediatric Endocrinology</h3>
              <p>Specialized care for hormonal disorders in children including growth and puberty disorders.</p>
            </div>
            <div class="clinic-item">
              <h3>Bone Health Clinic</h3>
              <p>Treatment for bone density issues and osteoporosis to prevent fragility fractures.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="approach">
        <div class="container">
          <h2>Our Approach to Treatment</h2>
          <p class="intro">Effective treatment for diabetes and endocrine disorders requires a holistic approach that considers not only the physical symptoms, but also the emotional and psychological well-being of the patient.</p>
          <div class="approach-grid">
            <div class="approach-card">
              <h3>Expert Team</h3>
              <p>Skilled endocrinologists, obesity experts, and certified diabetes educators working together.</p>
            </div>
            <div class="approach-card">
              <h3>Personalized Care</h3>
              <p>Customized management plans designed to suit your individual needs and lifestyle.</p>
            </div>
            <div class="approach-card">
              <h3>Advanced Technology</h3>
              <p>Latest diagnostic tools and treatment technology for advanced complications.</p>
            </div>
            <div class="approach-card">
              <h3>Quality Facilities</h3>
              <p>Well-equipped laboratory and pharmacy within our premises for convenient care.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  `,
  styles: [`
    .services {
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

    .services-content {
      padding: 3rem 0;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }

    .service-card {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      text-align: center;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      transition: all 0.3s ease;
    }

    .service-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 16px rgba(0,0,0,0.15);
    }

    .service-icon {
      font-size: 4rem;
      margin-bottom: 1rem;
    }

    .service-card h2 {
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    .service-card p {
      color: #7f8c8d;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .learn-more {
      background-color: #3498db;
      color: white;
      border: none;
      padding: 0.7rem 1.5rem;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .learn-more:hover {
      background-color: #2980b9;
    }

    .clinics-section {
      background-color: #f8f9fa;
      padding: 3rem 0;
    }

    .clinics-section h2 {
      text-align: center;
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    .intro {
      text-align: center;
      color: #7f8c8d;
      margin-bottom: 2rem;
      font-size: 1.1rem;
    }

    .clinics-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .clinic-item {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    .clinic-item h3 {
      color: #3498db;
      margin-bottom: 1rem;
    }

    .clinic-item p {
      color: #7f8c8d;
      line-height: 1.6;
      margin: 0;
    }

    .approach {
      padding: 3rem 0;
    }

    .approach h2 {
      text-align: center;
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    .approach-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    }

    .approach-card {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      text-align: center;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    .approach-card h3 {
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    .approach-card p {
      color: #7f8c8d;
      line-height: 1.6;
    }

    @media (max-width: 768px) {
      .hero h1 {
        font-size: 2rem;
      }

      .services-grid {
        grid-template-columns: 1fr;
      }

      .approach-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ServicesComponent implements OnInit {
  departments: Department[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.departments = this.dataService.getDepartments();
  }
}
