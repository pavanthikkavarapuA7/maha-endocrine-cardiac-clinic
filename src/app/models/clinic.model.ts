export interface Department {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
}

export interface Clinic {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Doctor {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  experience: string;
  specialties: string[];
  achievements?: string[];
}

export interface Appointment {
  id?: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  department: string;
  message: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: string;
}
