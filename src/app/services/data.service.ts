import { Injectable } from '@angular/core';
import { Department, Clinic, Doctor, ContactInfo } from '../models/clinic.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  getDepartments(): Department[] {
    return [
      {
        id: '1',
        name: 'Diabetes',
        description: 'Diabetes mellitus is characterised by an inability to secrete insulin which is needed by the body to convert glucose into energy. The three main types of diabetes – type 1, type 2 and gestational are all defined as metabolic disorders.',
        icon: '🩺',
        image: 'assets/images/diabetes.png'
      },
      {
        id: '2',
        name: 'Thyroid',
        description: 'The thyroid gland is located in the neck just below the Adam\'s apple and produces hormones that play a key role in regulating blood pressure, body temperature, heart rate, and metabolism.',
        icon: '⚡',
        image: 'assets/images/thyroid.png'
      },
      {
        id: '3',
        name: 'Adrenal',
        description: 'The adrenal glands are small glands located on top of the kidneys that produce hormones essential for stress response, blood pressure regulation, and metabolism.',
        icon: '💪',
        image: 'assets/images/adrenal.png'
      },
      {
        id: '4',
        name: 'Pituitary',
        description: 'The pituitary gland is located just off the hypothalamus at the base of the brain. This gland regulates the functions of other glands, as well as growth and several body functions.',
        icon: '🧠',
        image: 'assets/images/pituitary.png'
      },
      {
        id: '5',
        name: 'Gonads',
        description: 'Males and females have different gonads; testes and ovaries respectively. Gonadal disorders stem primarily from hormone dysfunctions.',
        icon: '♀️',
        image: 'assets/images/gonads.png'
      },
      {
        id: '6',
        name: 'Vitamin D & Calcium',
        description: 'Metabolic bone disorders are disorders of bone strength such as osteoporosis, osteomalacia, Paget\'s disease and parathyroid disorders.',
        icon: '🥛',
        image: 'assets/images/calcium.png'
      }
    ];
  }

  getSpecializedClinics(): Clinic[] {
    return [
      {
        id: '1',
        name: 'Diabetes Clinic',
        description: 'The goal of the Diabetes clinic is to encourage patients to receive early specialty care and education – getting them on the right track with their diabetes management.',
        image: 'assets/images/diabetes-clinic.jpg'
      },
      {
        id: '2',
        name: 'Thyroid Clinic',
        description: 'We have designed our services so that all of the specialists you need including endocrinologists, endocrine surgeons work together under one roof.',
        image: 'assets/images/thyroid-clinic.jpg'
      },
      {
        id: '3',
        name: 'Endocrine Surgery',
        description: 'This clinic provides surgical care of thyroid, parathyroid, adrenal, endocrine pancreas as well as neuroendocrine tumours.',
        image: 'assets/images/surgery-clinic.jpg'
      },
      {
        id: '4',
        name: 'Obesity Clinic',
        description: 'With sedentary lifestyles and hectic schedules, the clinic has been started to spread awareness and treat people suffering from obesity.',
        image: 'assets/images/obesity-clinic.jpg'
      },
      {
        id: '5',
        name: 'Paediatric Endocrinology Clinic',
        description: 'The clinic takes care of all the hormonal disorders in children such as juvenile diabetes, growth and puberty disorders.',
        image: 'assets/images/pediatric-clinic.jpg'
      },
      {
        id: '6',
        name: 'Bone Health Clinic',
        description: 'The density of bones can decrease due to hormonal changes, which can lead to fragility fractures, bone deformities and serious disability.',
        image: 'assets/images/bone-clinic.jpg'
      }
    ];
  }

  getDoctor(): Doctor {
    return {
      id: '1',
      name: 'Dr. Likitha B',
      title: 'MD General Medicine, DM Endocrinology',
      bio: 'Dr. Likitha B is a well-known name in the field of endocrinology. She is trained in one of the best institutes in India and has over 10 years of experience in treating all types of diabetes patients and complex hormonal problems. She has earned many gold medals and delivered lectures across India.',
      image: 'assets/images/doctor.jpg',
      experience: '10+ years',
      specialties: ['Diabetes Management', 'Thyroid Disorders', 'Endocrine Surgery', 'Hormone Therapy']
    };
  }

  getContactInfo(): ContactInfo {
    return {
      address: 'JCWV+29C Tirupati, Andhra Pradesh',
      phone: '+91 9550 899 143',
      email: 'drlikitha1989@gmail.com',
      hours: 'Monday - Saturday: 9:00 AM - 6:00 PM'
    };
  }

  getClinicStats() {
    return [
      { label: 'Diabetes Patients', value: '100000+' },
      { label: 'Thyroid Patients', value: '1000+' },
      { label: 'Pituitary Patients', value: '50+' },
      { label: 'Gestational Mellitus Patients', value: '200+' }
    ];
  }
}
