export type PageView = 'home' | 'classes-ix-x' | 'classes-xi-xii' | 'adc' | 'computer-classes' | 'contact';

export interface CourseItem {
  id: string;
  title: string;
  category: 'academic-secondary' | 'academic-higher' | 'academic-degree' | 'computer';
  badge: string;
  tagline: string;
  description: string;
  subjectsOrModules: string[];
  schedule: string;
  duration?: string;
  features: string[];
  targetAudience: string;
  iconName: string;
}

export interface InquiryFormData {
  name: string;
  phone: string;
  course: string;
  timingPreference: string;
  message: string;
}
