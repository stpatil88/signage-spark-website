
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  service: string;
  quote: string;
  image?: string;
}

export interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}
