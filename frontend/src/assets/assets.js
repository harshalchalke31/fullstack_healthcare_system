import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import logo from './logo.png'
import poster from './poster.png'
import user1 from './user1.png'
import dropdown_icon from './dropdown_icon.svg'
import group_profiles from './group_profiles.png'
import arrow from './arrow_icon.svg'
import ai_logo from './ai_logo.svg'
import general_physician from './general_physician.png'
import gynecologist from './gynecologist.png'
import dermatologist from './dermatologist.png'
import pediatrician from './pediatrician.png'
import neurologist from './neurologist.png'
import gastroenterologist from './gastroenterologist.png'
import banner from './banner.png'
import portfolio_icon from './portfolio_icon.svg'
import linkedin_icon from'./linkedin_icon.svg'
import github_icon from './github_icon.svg'
import gmail_icon from './gmail_icon.svg'

export const specialityData =[
    {
        speciality: 'General Physician',
        path: 'general physician',
        image: general_physician
    },
    {
        speciality: 'Gynecologist',
        path: 'gynecologist',
        image: gynecologist
    },
    {
        speciality: 'Dermatologist',
        path: 'dermatologist',
        image: dermatologist
    },
    {
        speciality: 'Pediatrician',
        path: 'pediatrician',
        image: pediatrician
    },
    {
        speciality: 'Neurologist',
        path: 'neurologist',
        image: neurologist
    },
    {
        speciality: 'Gastroenterologist',
        path: 'gastroenterologist',
        image: gastroenterologist
    },


]

export const assets ={
    logo, 
    poster,
    user1,
    dropdown_icon,
    group_profiles,
    arrow,
    ai_logo,
    banner,
    portfolio_icon,
    linkedin_icon,
    github_icon,
    gmail_icon,
    
    
    

}

export const doctors = [
  {
    _id: 'doc1',
    name: 'Dr. Amir Khalid',
    image: doc1,
    speciality: 'General physician',
    degree: 'MD (Internal Medicine)',
    experience: '9 Years',
    about: 'Dr. Khalid delivers comprehensive primary care with a strong emphasis on preventive medicine, chronic disease management, and patient education. He believes in proactive health planning and long-term doctor–patient relationships.',
    fees: 120,
    availability: 'Available',
    address: {
      line1: '214 Maple Avenue',
      line2: 'Suite 3B, San Jose, CA 95126'
    }
  },
  {
    _id: 'doc2',
    name: 'Dr. Mei Tanaka',
    image: doc2,
    speciality: 'Gynecologist',
    degree: 'MD (Obstetrics & Gynecology)',
    experience: '11 Years',
    about: 'Dr. Tanaka specializes in women’s reproductive health, prenatal care, and minimally invasive gynecologic procedures. She is dedicated to compassionate care and informed decision-making.',
    fees: 180,
    availability: true,
    address: {
      line1: '58 King Street',
      line2: 'Women’s Health Building, Palo Alto, CA 94301'
    }
  },
  {
    _id: 'doc3',
    name: 'Dr. Oliver Grant',
    image: doc3,
    speciality: 'Neurologist',
    degree: 'MD (Neurology)',
    experience: '15 Years',
    about: 'Dr. Grant treats neurological conditions including migraines, epilepsy, neuropathy, and movement disorders. His approach blends advanced diagnostics with individualized treatment plans.',
    fees: 220,
    availability: true,
    address: {
      line1: '900 Medical Plaza Drive',
      line2: 'Neurology Suite 510, Los Angeles, CA 90095'
    }
  },
  {
    _id: 'doc4',
    name: 'Dr. Denise Harper',
    image: doc4,
    speciality: 'Gynecologist',
    degree: 'MD (Obstetrics & Gynecology)',
    experience: '18 Years',
    about: 'Dr. Harper provides full-spectrum gynecologic and obstetric care, including fertility counseling, pregnancy management, and menopause care, with a patient-first philosophy.',
    fees: 200,
    availability: false,
    address: {
      line1: '31 Orchard Lane',
      line2: 'Women’s Care Center, Austin, TX 78701'
    }
  },
  {
    _id: 'doc5',
    name: 'Dr. Lauren Whitfield',
    image: doc5,
    speciality: 'Dermatologist',
    degree: 'MD (Dermatology)',
    experience: '10 Years',
    about: 'Dr. Whitfield treats medical and cosmetic skin conditions such as acne, eczema, psoriasis, and skin aging. She focuses on evidence-based treatments and personalized skincare plans.',
    fees: 190,
    availability: true,
    address: {
      line1: '77 Brookside Drive',
      line2: 'Dermatology Suite 12, Beverly Hills, CA 90211'
    }
  },
  {
    _id: 'doc6',
    name: 'Dr. Marcus Bennett',
    image: doc6,
    speciality: 'Gastroenterologist',
    degree: 'MD (Gastroenterology)',
    experience: '16 Years',
    about: 'Dr. Bennett manages digestive and liver disorders including GERD, IBS, IBD, and fatty liver disease, combining advanced diagnostics with lifestyle-focused care.',
    fees: 230,
    availability: true,
    address: {
      line1: '140 Riverside Boulevard',
      line2: 'GI Specialists Clinic, New York, NY 10069'
    }
  },
  {
    _id: 'doc7',
    name: 'Dr. Priya Nair',
    image: doc7,
    speciality: 'General physician',
    degree: 'MD (Family Medicine)',
    experience: '7 Years',
    about: 'Dr. Nair offers comprehensive family medicine services, managing acute illnesses and chronic conditions while emphasizing preventive screenings and patient education.',
    fees: 110,
    availability: true,
    address: {
      line1: '22 Elm Court',
      line2: 'Family Health Center, Fremont, CA 94538'
    }
  },
  {
    _id: 'doc8',
    name: 'Dr. Simone Carter',
    image: doc8,
    speciality: 'Dermatologist',
    degree: 'MD (Dermatology)',
    experience: '12 Years',
    about: 'Dr. Carter specializes in complex dermatologic conditions, skin allergies, and hair disorders. She is known for inclusive care across all skin types.',
    fees: 210,
    availability: true,
    address: {
      line1: '6 Queensway',
      line2: 'Skin & Laser Institute, Chicago, IL 60611'
    }
  },
  {
    _id: 'doc9',
    name: 'Dr. Hannah Cole',
    image: doc9,
    speciality: 'General physician',
    degree: 'MD (Internal Medicine)',
    experience: '8 Years',
    about: 'Dr. Cole focuses on adult primary care, preventive screenings, and lifestyle-based management of common conditions such as hypertension and diabetes.',
    fees: 115,
    availability: true,
    address: {
      line1: '19 Rosewood Street',
      line2: 'Primary Care Associates, Portland, OR 97205'
    }
  },
  {
    _id: 'doc10',
    name: 'Dr. Ethan Parker',
    image: doc10,
    speciality: 'Pediatrician',
    degree: 'MD (Pediatrics)',
    experience: '13 Years',
    about: 'Dr. Parker provides pediatric care from infancy through adolescence, including wellness visits, immunizations, and developmental guidance in a family-friendly environment.',
    fees: 150,
    availability: true,
    address: {
      line1: '45 Lavender Crescent',
      line2: 'Children’s Medical Center, Denver, CO 80206'
    }
  }
];
