import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppointmentService } from '../services/appointment.service';
import { DataService } from '../services/data.service';
import { Appointment, Department } from '../models/clinic.model';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <main class="appointment">
      <section class="hero">
        <div class="container">
          <h1>Book an Appointment</h1>
          <p>Schedule your consultation with Dr. Likitha B</p>
        </div>
      </section>

      <section class="appointment-content">
        <div class="container">
          <div class="appointment-grid">
            <div class="form-section">
              <h2>Appointment Details</h2>
              <form (ngSubmit)="submitForm()" #appointmentForm="ngForm">
                <div class="form-group">
                  <label for="name">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    [(ngModel)]="form.name" 
                    required
                    placeholder="Enter your full name">
                </div>

                <div class="form-group">
                  <label for="email">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    [(ngModel)]="form.email" 
                    required
                    placeholder="Enter your email">
                </div>

                <div class="form-group">
                  <label for="phone">Phone Number *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    [(ngModel)]="form.phone" 
                    required
                    placeholder="Enter your phone number">
                </div>

                <div class="form-group">
                  <label for="date">Preferred Date *</label>
                  <input 
                    type="date" 
                    id="date" 
                    name="date" 
                    [(ngModel)]="form.date" 
                    required>
                </div>

                <div class="form-group">
                  <label for="time">Preferred Time *</label>
                  <select 
                    id="time" 
                    name="time" 
                    [(ngModel)]="form.time" 
                    required>
                    <option value="">Select Time</option>
                    <option value="09:00">09:00 AM</option>
                    <option value="09:30">09:30 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="10:30">10:30 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="14:30">02:30 PM</option>
                    <option value="15:00">03:00 PM</option>
                    <option value="15:30">03:30 PM</option>
                    <option value="16:00">04:00 PM</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="department">Department *</label>
                  <select 
                    id="department" 
                    name="department" 
                    [(ngModel)]="form.department" 
                    required>
                    <option value="">Select Department</option>
                    <option *ngFor="let dept of departments" value="{{ dept.name }}">
                      {{ dept.name }}
                    </option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="message">Additional Information</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    [(ngModel)]="form.message"
                    rows="4"
                    placeholder="Any additional information about your condition"></textarea>
                </div>

                <button type="submit" class="submit-btn" [disabled]="!appointmentForm.valid">
                  Book Appointment
                </button>

                <div *ngIf="successMessage" class="success-message">
                  ✓ {{ successMessage }}
                </div>
              </form>
            </div>

            <div class="info-section">
              <h2>Contact Information</h2>
              <div class="info-box">
                <h3>📞 Phone</h3>
                <p>{{ contactInfo.phone }}</p>
              </div>
              <div class="info-box">
                <h3>📧 Email</h3>
                <p>{{ contactInfo.email }}</p>
              </div>
              <div class="info-box">
                <h3>📍 Location</h3>
                <p>{{ contactInfo.address }}</p>
              </div>
              <div class="info-box">
                <h3>⏰ Hours</h3>
                <p>{{ contactInfo.hours }}</p>
              </div>

              <div class="booking-info">
                <h3>Quick Tips</h3>
                <ul>
                  <li>Please arrive 10 minutes early</li>
                  <li>Bring your medical history and reports</li>
                  <li>Appointment confirmation will be sent via email</li>
                  <li>Cancellations should be done 24 hours in advance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  `,
  styles: [`
    .appointment {
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

    .appointment-content {
      padding: 3rem 0;
    }

    .appointment-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
    }

    .form-section,
    .info-section {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    h2 {
      color: #2c3e50;
      margin-bottom: 1.5rem;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    label {
      display: block;
      margin-bottom: 0.5rem;
      color: #2c3e50;
      font-weight: 500;
    }

    input,
    select,
    textarea {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #bdc3c7;
      border-radius: 4px;
      font-family: inherit;
      font-size: 1rem;
      box-sizing: border-box;
    }

    input:focus,
    select:focus,
    textarea:focus {
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

    .submit-btn:hover:not(:disabled) {
      background-color: #c0392b;
    }

    .submit-btn:disabled {
      background-color: #bdc3c7;
      cursor: not-allowed;
    }

    .success-message {
      background-color: #d4edda;
      color: #155724;
      padding: 1rem;
      border-radius: 4px;
      margin-top: 1rem;
      border: 1px solid #c3e6cb;
    }

    .info-box {
      background-color: #f8f9fa;
      padding: 1.5rem;
      border-radius: 4px;
      margin-bottom: 1.5rem;
      border-left: 4px solid #3498db;
    }

    .info-box h3 {
      color: #2c3e50;
      margin-bottom: 0.5rem;
    }

    .info-box p {
      color: #7f8c8d;
      margin: 0;
      line-height: 1.6;
    }

    .booking-info {
      background-color: #e8f4f8;
      padding: 1.5rem;
      border-radius: 4px;
    }

    .booking-info h3 {
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    .booking-info ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .booking-info li {
      color: #7f8c8d;
      padding: 0.5rem 0;
      padding-left: 1.5rem;
      position: relative;
    }

    .booking-info li:before {
      content: "✓";
      position: absolute;
      left: 0;
      color: #27ae60;
    }

    @media (max-width: 768px) {
      .appointment-grid {
        grid-template-columns: 1fr;
      }

      .hero h1 {
        font-size: 2rem;
      }
    }
  `]
})
export class AppointmentComponent implements OnInit {
  form: Appointment = {
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    department: '',
    message: ''
  };

  departments: Department[] = [];
  contactInfo: any = {
    address: '',
    phone: '',
    email: '',
    hours: ''
  };
  successMessage = '';

  constructor(
    private appointmentService: AppointmentService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.departments = this.dataService.getDepartments();
    this.contactInfo = this.dataService.getContactInfo();
  }

  submitForm() {
    if (this.form.name && this.form.email && this.form.phone && this.form.date && this.form.time && this.form.department) {
      this.appointmentService.bookAppointment(this.form).subscribe(() => {
        this.successMessage = 'Appointment booked successfully! We will contact you soon.';
        this.resetForm();
        setTimeout(() => {
          this.successMessage = '';
        }, 5000);
      });
    }
  }

  resetForm() {
    this.form = {
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      department: '',
      message: ''
    };
  }
}
