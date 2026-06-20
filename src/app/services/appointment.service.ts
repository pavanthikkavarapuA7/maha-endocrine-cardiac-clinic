import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Appointment } from '../models/clinic.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  
  private appointments$ = new BehaviorSubject<Appointment[]>([]);
  
  constructor() { }

  bookAppointment(appointment: Appointment): Observable<Appointment> {
    // In a real application, this would send data to a backend server
    const currentAppointments = this.appointments$.value;
    appointment.id = Date.now().toString();
    const updatedAppointments = [...currentAppointments, appointment];
    this.appointments$.next(updatedAppointments);
    
    console.log('Appointment booked:', appointment);
    return new Observable(observer => {
      observer.next(appointment);
      observer.complete();
    });
  }

  getAppointments(): Observable<Appointment[]> {
    return this.appointments$.asObservable();
  }
}
