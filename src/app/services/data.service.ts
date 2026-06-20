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

  getDoctors(): Doctor[] {
    return [
      {
        id: '1',
        name: 'Dr. Likhitha Reddy',
        title: 'MD General Medicine, DM Endocrinology',
        bio: 'Dr. Likhitha Reddy is a dedicated and highly qualified Endocrinologist, currently serving as a Consultant at Aster Narayanadri Hospital, Tirupati. With a strong academic foundation and a passion for holistic endocrine care, she brings both clinical excellence and a deep sense of empathy to her practice. Dr. Likhitha completed her MBBS from Government Siddhartha Medical College, followed by an MD in Internal Medicine from Andhra Medical College, Visakhapatnam. She went on to pursue a DM in Endocrinology from SVIMS, Tirupati — a premier institution known for advanced training in hormonal and metabolic disorders. Her journey also includes academic service as an Assistant Professor of Endocrinology, where she contributed to both medical education and research. Her patient-first philosophy, calm demeanor, and dedication to long-term health outcomes make her a trusted partner in managing complex endocrine conditions.',
        image: 'assets/images/Dr.Likitha.jpeg',
        experience: '10+ years',
        specialties: ['Diabetes & Metabolism', 'Diabetes Reversal & Lifestyle Medicine', 'Obesity & Metabolic Syndrome', 'Thyroid Disorders', 'Pituitary Disorders', 'Adrenal Disorders', 'Reproductive Endocrinology', 'Osteoporosis & Osteopenia', 'Lipid Disorders', 'Pediatric & Genetic Endocrine Disorders'],
        achievements: ['Consultant Endocrinologist at Aster Narayanadri Hospital, Tirupati', 'MBBS from Government Siddhartha Medical College', 'MD in Internal Medicine from Andhra Medical College, Visakhapatnam', 'DM in Endocrinology from SVIMS, Tirupati', 'Former Assistant Professor of Endocrinology', 'Focus on Diabetes Reversal, Lifestyle Medicine, and Metabolic Health Transformation']
      },
      {
        id: '2',
        name: 'Dr. Palem Sumanth Reddy',
        title: 'MD, DM Cardiology',
        bio: 'Dr. Palem Sumanth Reddy (MD, DM Cardiology) is a consultant Interventional Cardiologist at Narayanadri Hospitals and Research Institute, Tirupati. He completed MBBS from 2005 to 2011 at Kurnool Medical College, Kurnool; MD in General Medicine from SVIMS, Tirupati from 2013 to 2016; and DM in Cardiology from SVIMS from 2016 to 2019. From August 2019 to August 2020, he served as Assistant Professor of Cardiology at SVIMS.',
        image: 'assets/images/Dr.Sumanth.jpeg',
        experience: '18+ years',
        specialties: ['Coronary Angiogram', 'Coronary Angioplasty', 'IVUS', 'FFR', 'Intra-aortic balloon pump insertion', 'Pacemaker and ICD implantation', 'Diagnostic cardiac catheterization', 'Balloon mitral and pulmonary valvuloplasty', 'ASD and PDA device closure', 'Pericardiocentesis', 'Peripheral angiogram & angioplasty', 'Embolization'],
        achievements: ['Gold medal in MD Medicine, 2016', 'Best oral paper presentation at APICON 2015', 'Best oral poster presentation at CSICON 2018', 'Published article in IOSR Journal of Medical Sciences on balloon mitral valvuloplasty and left ventricular performance']
      }
    ];
  }

  getDoctor(): Doctor {
    return this.getDoctors()[0];
  }

  getContactInfo(): ContactInfo {
    return {
      address: 'JCWV+29C Tirupati, Andhra Pradesh',
      phone: '+91 8125609966',
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
