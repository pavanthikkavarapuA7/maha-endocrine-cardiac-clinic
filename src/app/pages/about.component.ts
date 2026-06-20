import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';
import { Doctor } from '../models/clinic.model';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="about">
      <section class="hero">
        <div class="container">
          <h1>About Us</h1>
          <p>Leading Endocrinology Clinic in Tirupati</p>
        </div>
      </section>

      <section class="about-content">
        <div class="container">
          <div class="about-section">
            <h2>About Maha Endocrine & Cardiac Clinic</h2>
            <p>At Maha Endocrine & Cardiac Clinic, we bring you specialized clinical service for diabetes and endocrine disorders. From prevention and lifestyle management to latest technology for advanced complications, it is one integrated setup. Our qualified team of specialists and counsellors have designed structured programs and packages to suit your individual needs. The premises is equipped with quality lab and pharmacy.</p>
            
            <p>We provide world class comprehensive one stop solution to all hormone related problems. This is your only destination for all diabetes, thyroid, PCOD, growth and all hormone related problems.</p>
          </div>

          <div class="doctor-profiles" *ngIf="doctors.length">
            <div class="doctor-profile" *ngFor="let doc of doctors">
              <div class="doctor-image">
                <img [src]="doc.image" [alt]="doc.name">
              </div>
              <div class="doctor-details">
                <h2>{{ doc.name }}</h2>
                <p class="title">{{ doc.title }}</p>
                <p class="experience">{{ doc.experience }} of Experience</p>
                
                <div class="bio-section">
                  <p>{{ doc.bio }}</p>
                </div>

                <div class="achievements" *ngIf="doc.achievements?.length">
                  <h3>Achievements & Credentials</h3>
                  <ul>
                    <li *ngFor="let achievement of doc.achievements">{{ achievement }}</li>
                  </ul>
                </div>

                <div class="specialties">
                  <h3>Areas of Specialization</h3>
                  <ul>
                    <li *ngFor="let specialty of doc.specialties">✓ {{ specialty }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="mission-section">
        <div class="container">
          <div class="mission-grid">
            <div class="mission-card">
              <h3>Our Mission</h3>
              <p>To provide comprehensive, holistic care for patients with diabetes, endocrine and metabolic disorders, with a focus on improving quality of life and long-term health outcomes.</p>
            </div>
            <div class="mission-card">
              <h3>Our Vision</h3>
              <p>To be the leading endocrinology clinic in the region, known for excellence in patient care, innovative treatment approaches, and advancing the field of endocrinology.</p>
            </div>
            <div class="mission-card">
              <h3>Our Values</h3>
              <p>Excellence, compassion, integrity, and continuous improvement in everything we do. We believe in treating each patient with dignity and providing the highest quality care.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="team-section">
        <div class="container">
          <h2>Our Team</h2>
          <p>Our team includes skilled and experienced endocrinologists, obesity experts, paediatric endocrinologists, and certified diabetes and diet educators. We have management plans for different disorders and are committed to providing quality healthcare.</p>
          
          <div class="team-features">
            <div class="feature">
              <h3>👨‍⚕️ Expert Endocrinologists</h3>
              <p>Specialized physicians with years of experience in hormone disorders</p>
            </div>
            <div class="feature">
              <h3>⚕️ Endocrine Surgeons</h3>
              <p>Experienced surgeons for complex endocrine surgical procedures</p>
            </div>
            <div class="feature">
              <h3>👩‍⚕️ Diabetes Educators</h3>
              <p>Certified professionals to guide you on diabetes management</p>
            </div>
            <div class="feature">
              <h3>🍎 Diet Counselors</h3>
              <p>Expert nutritionists to create personalized diet plans</p>
            </div>
          </div>
        </div>
      </section>

      <section class="why-choose">
        <div class="container">
          <h2>Why Choose Maha Endocrine & Cardiac Clinic?</h2>
          <div class="reasons-grid">
            <div class="reason-card">
              <div class="reason-icon">🏥</div>
              <h3>Comprehensive Care</h3>
              <p>One-stop solution for all your endocrine and metabolic health needs</p>
            </div>
            <div class="reason-card">
              <div class="reason-icon">🔬</div>
              <h3>Advanced Technology</h3>
              <p>State-of-the-art diagnostic and treatment equipment</p>
            </div>
            <div class="reason-card">
              <div class="reason-icon">👥</div>
              <h3>Expert Team</h3>
              <p>Highly qualified specialists with extensive experience</p>
            </div>
            <div class="reason-card">
              <div class="reason-icon">💊</div>
              <h3>Quality Pharmacy</h3>
              <p>On-site pharmacy with all required medications</p>
            </div>
            <div class="reason-card">
              <div class="reason-icon">📊</div>
              <h3>Personalized Plans</h3>
              <p>Customized treatment and management programs for each patient</p>
            </div>
            <div class="reason-card">
              <div class="reason-icon">❤️</div>
              <h3>Holistic Approach</h3>
              <p>We care for your physical, emotional, and psychological well-being</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  `,
  styles: [`
    .about {
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

    .about-content {
      padding: 3rem 0;
    }

    .about-section {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      margin-bottom: 3rem;
    }

    .about-section h2 {
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    .about-section p {
      color: #7f8c8d;
      line-height: 1.8;
      margin-bottom: 1rem;
    }

    .doctor-profiles {
      display: grid;
      gap: 3rem;
    }

    .doctor-profile {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: start;
    }

    .doctor-image img {
      width: 100%;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }

    .doctor-details h2 {
      color: #2c3e50;
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }

    .doctor-details .title {
      color: #3498db;
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    .doctor-details .experience {
      color: #e74c3c;
      font-weight: bold;
      margin-bottom: 1rem;
    }

    .bio-section {
      margin-bottom: 1.5rem;
    }

    .bio-section p {
      color: #7f8c8d;
      line-height: 1.8;
    }

    .achievements,
    .specialties {
      margin-bottom: 1.5rem;
    }

    .achievements h3,
    .specialties h3 {
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    .achievements ul,
    .specialties ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .achievements li,
    .specialties li {
      color: #7f8c8d;
      padding: 0.5rem 0;
      padding-left: 1.5rem;
      position: relative;
    }

    .achievements li:before {
      content: "⭐";
      position: absolute;
      left: 0;
    }

    .specialties li:before {
      content: "✓";
      position: absolute;
      left: 0;
      color: #27ae60;
    }

    .mission-section {
      background-color: #f8f9fa;
      padding: 3rem 0;
    }

    .mission-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .mission-card {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      text-align: center;
    }

    .mission-card h3 {
      color: #3498db;
      margin-bottom: 1rem;
    }

    .mission-card p {
      color: #7f8c8d;
      line-height: 1.6;
    }

    .team-section {
      padding: 3rem 0;
    }

    .team-section h2 {
      text-align: center;
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    .team-section > .container > p {
      text-align: center;
      color: #7f8c8d;
      margin-bottom: 2rem;
      font-size: 1.1rem;
    }

    .team-features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .feature {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      text-align: center;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    .feature h3 {
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    .feature p {
      color: #7f8c8d;
    }

    .why-choose {
      background-color: #f8f9fa;
      padding: 3rem 0;
    }

    .why-choose h2 {
      text-align: center;
      color: #2c3e50;
      margin-bottom: 2rem;
    }

    .reasons-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }

    .reason-card {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      text-align: center;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
    }

    .reason-card:hover {
      transform: translateY(-5px);
    }

    .reason-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .reason-card h3 {
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    .reason-card p {
      color: #7f8c8d;
      line-height: 1.6;
    }

    @media (max-width: 768px) {
      .hero h1 {
        font-size: 2rem;
      }

      .doctor-profile {
        grid-template-columns: 1fr;
      }

      .reasons-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class AboutComponent implements OnInit {
  doctors: Doctor[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.doctors = this.dataService.getDoctors();
  }
}
