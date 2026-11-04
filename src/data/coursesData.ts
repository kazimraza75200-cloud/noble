export interface CourseDetail {
  id: string;
  name: string;
  code: string;
  level: string;
  shortDesc: string;
  fullDesc: string;
  category: 'matric' | 'intermediate' | 'degree' | 'computer';
  timings: string;
  features: string[];
  modulesOrSubjects: {
    title: string;
    description: string;
    keyTopics: string[];
  }[];
  outcomes: string[];
  prerequisites: string;
}

export const ACADEMIC_COURSES = {
  matric: {
    title: 'Classes IX – X (Matriculation Coaching)',
    board: 'Board of Secondary Education Karachi (BSEK)',
    description: 'Comprehensive, result-driven coaching designed to help students master basic concepts, excel in board exams, and build strong analytical foundations in Science and General groups.',
    groups: [
      {
        name: 'Science Group (Biology / Computer)',
        target: 'Class 9 & 10 Students',
        subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology / Computer Science', 'English', 'Urdu / Islamiat / Pak Studies'],
        description: 'Rigorous conceptual foundation with chapter-wise numerical problem solving, scientific definitions, and theorem practice.'
      },
      {
        name: 'General Group (Arts / Commerce Foundations)',
        target: 'Class 9 & 10 Students',
        subjects: ['General Mathematics', 'General Science', 'Economics', 'Civics / History', 'English', 'Urdu'],
        description: 'Step-by-step guidance for students pursuing general disciplines with regular writing exercises and board mock drills.'
      }
    ],
    features: [
      'Experienced subject-specialist teachers for BSEK syllabus',
      'Chapter-wise tests & comprehensive Sunday mock exams',
      'Extensive 5-year past paper revision sessions',
      'Individual attention for weak chapters and numerical practice',
      'Dedicated guidance for practical journal completion'
    ],
    testSystem: [
      'Weekly Chapter Assessments every Saturday',
      'Monthly Grand Review Tests with detailed parent report cards',
      'Pre-Board Prelim Examination simulating real BSEK exam hall conditions'
    ]
  },
  intermediate: {
    title: 'Classes XI – XII (Intermediate Coaching)',
    board: 'Board of Intermediate Education Karachi (BIEK)',
    description: 'Specialized faculty-led coaching for First Year (XI) and Second Year (XII) students. We focus on in-depth concept clarity, target board scoring patterns, and preparation for professional university entrance tests.',
    groups: [
      {
        name: 'Pre-Engineering',
        subjects: ['Mathematics (Algebra & Calculus)', 'Physics', 'Chemistry', 'English', 'Urdu / Pak Studies'],
        focus: 'Rigorous analytical problem solving, derivations, and board presentation techniques.'
      },
      {
        name: 'Pre-Medical',
        subjects: ['Biology (Botany & Zoology)', 'Physics', 'Chemistry', 'English', 'Urdu / Pak Studies'],
        focus: 'Conceptual biological diagrams, scientific terminology, chemical reactions, and numerical physics.'
      },
      {
        name: 'Computer Science (ICS)',
        subjects: ['Computer Science (C++ / Database)', 'Mathematics', 'Physics', 'English', 'Urdu / Pak Studies'],
        focus: 'Practical coding logic, flowcharts, algorithms, and applied mathematical concepts.'
      },
      {
        name: 'Commerce',
        subjects: ['Principles of Accounting', 'Business Mathematics & Statistics', 'Principles of Economics', 'Banking / Commercial Geography', 'English'],
        focus: 'Ledger, journalizing, financial ratios, balance sheet accuracy, and economic diagrams.'
      }
    ],
    features: [
      'Senior college professors and experienced board examiners',
      'Formula sheets, solved past-paper compilation, and board-standard model papers',
      'Special doubt-clearing sessions before final exams',
      'Guidance on MCQs, short questions, and detailed answer formats'
    ]
  },
  adc: {
    title: 'Associate Degree in Commerce (ADC / B.Com)',
    board: 'University of Karachi (UoK) Curriculum',
    description: 'Focused academic coaching tailored for ADC Part 1 & Part 2 students. Designed specifically to provide working students and college attendees with high-yield concepts, past-paper drills, and professional accounting clarity during convenient afternoon and evening hours.',
    subjects: [
      {
        name: 'Advanced & Financial Accounting',
        code: 'ADC-ACC',
        details: 'Partnership accounting, company accounts, shares & debentures, branch accounts, and depreciation accounting.'
      },
      {
        name: 'Cost Accounting',
        code: 'ADC-COST',
        details: 'Cost sheets, job costing, process costing, material inventory control, and factory overhead allocation.'
      },
      {
        name: 'Business Mathematics & Statistics',
        code: 'ADC-MATH',
        details: 'Matrices, linear equations, probability, index numbers, standard deviation, and regression analysis.'
      },
      {
        name: 'Auditing & Taxation',
        code: 'ADC-AUD',
        details: 'Internal controls, audit procedures, professional ethics, sales tax, and income tax ordinance basics.'
      },
      {
        name: 'Economics & Business Finance',
        code: 'ADC-ECO',
        details: 'Micro & Macro economic analysis, national income, monetary policy, and corporate financing instruments.'
      },
      {
        name: 'Business Law & Communication',
        code: 'ADC-LAW',
        details: 'Contract Act, negotiable instruments, business correspondence, and report writing.'
      }
    ],
    highlights: [
      'Flexible scheduling within our 2:00 PM – 8:00 PM time window',
      'Comprehensive 10-year University of Karachi past paper solutions',
      'Step-by-step practical accounting problem walkthroughs',
      'Exam writing techniques to secure top marks and pass in first attempt'
    ]
  }
};

export const COMPUTER_COURSES = [
  {
    id: 'ms-office',
    title: 'MS Office & Practical Computer Skills',
    tagline: 'Master Essential Office Software for Jobs & Academic Work',
    badge: 'Foundation & Professional',
    duration: '2 Months (3 Days/Week)',
    level: 'Beginner to Intermediate',
    overview: 'Hands-on practical computer training covering Microsoft Word, Excel, PowerPoint, and core Windows operating system navigation. Perfect for students, office administrators, accountants, and freelancers.',
    modules: [
      {
        title: 'Microsoft Word (Document Mastery)',
        items: [
          'Professional document formatting & typing ergonomics',
          'Table design, graphics, headers, footers & watermarks',
          'Mail merge, formal letterheads & curriculum vitae (CV) design',
          'Page layouts, table of contents & export to PDF'
        ]
      },
      {
        title: 'Microsoft Excel (Spreadsheets & Formulas)',
        items: [
          'Data entry, cells formatting, shortcuts & rows/columns management',
          'Core mathematical & logical formulas (SUM, AVERAGE, IF, VLOOKUP, COUNTIF)',
          'Salary sheets, inventory logs, mark sheets & invoice creation',
          'Data sorting, filtering, conditional formatting & interactive charts'
        ]
      },
      {
        title: 'Microsoft PowerPoint (Presentations)',
        items: [
          'Slide layout design, typography & color schemes',
          'SmartArt, diagrams, image cropping & video integration',
          'Slide transitions, custom animations & presenter view',
          'Creating compelling academic and business pitch decks'
        ]
      },
      {
        title: 'Practical Computer Fundamentals',
        items: [
          'Windows system navigation, file organization & folder structures',
          'Cloud storage (Google Drive, OneDrive) & file sharing',
          'Urdu typing integration (InPage / Windows Urdu keyboard)',
          'Printing, scanning, data backups & email etiquette'
        ]
      }
    ],
    outcomes: [
      'Confidently create professional business letters and reports',
      'Calculate payroll, student marks, and financial registers in Excel',
      'Deliver engaging visual presentations',
      'Acquire basic computer certification for workplace readiness'
    ]
  },
  {
    id: 'wordpress',
    title: 'WordPress Website Development',
    tagline: 'Build Responsive Business Websites & Blogs Without Coding',
    badge: 'High In-Demand',
    duration: '2 Months (Hands-On Lab)',
    level: 'Beginner to Intermediate',
    overview: 'Learn how to build stunning, fast, and responsive websites using the world\'s most popular CMS. Master themes, visual drag-and-drop page builders, plugins, and client project delivery.',
    modules: [
      {
        title: 'WordPress Fundamentals & Setup',
        items: [
          'How domains, web hosting, and local servers (XAMPP/LocalWP) work',
          'WordPress installation, dashboard walkthrough, and initial settings',
          'Understanding posts, pages, categories, tags & media library'
        ]
      },
      {
        title: 'Themes & Visual Page Builders',
        items: [
          'Selecting and installing modern lightweight themes (Astra, OceanWP)',
          'Designing landing pages with Elementor and Gutenberg blocks',
          'Header, footer, navigation menus & mobile responsiveness adjustments'
        ]
      },
      {
        title: 'Essential Plugins & Functionality',
        items: [
          'Contact forms (WPForms / Contact Form 7) & WhatsApp chat buttons',
          'SEO setup with Yoast SEO or RankMath for Google ranking',
          'Website speed optimization (caching, image compression)',
          'Security best practices & spam protection'
        ]
      },
      {
        title: 'Client Management & Launch',
        items: [
          'Migrating websites between hosts or staging to live',
          'Creating business portfolio, blog, and service websites',
          'How to package website services for local Karachi clients & freelancing'
        ]
      }
    ],
    outcomes: [
      'Build complete commercial websites from scratch without writing code',
      'Customize themes and create mobile-friendly custom page layouts',
      'Launch professional websites for businesses, schools, and services',
      'Start offering freelance website creation services'
    ]
  },
  {
    id: 'shopify',
    title: 'Shopify E-Commerce Store Development',
    tagline: 'Launch & Manage Profitable Online Stores in Pakistan & Globally',
    badge: 'E-Commerce Specialization',
    duration: '1.5 Months (Practical Store Project)',
    level: 'Beginner to Intermediate',
    overview: 'Master the premier e-commerce platform powering millions of online businesses. Learn how to launch a branded store, upload products, set up cash-on-delivery (COD) for Pakistan, and automate orders.',
    modules: [
      {
        title: 'Shopify Store Setup & Architecture',
        items: [
          'Shopify account creation, plans, and store admin overview',
          'Configuring business settings, currency (PKR/USD), and taxes',
          'Domain connection and brand identity settings'
        ]
      },
      {
        title: 'Theme Customization & Store Design',
        items: [
          'Customizing Shopify free & premium themes (Dawn theme mastery)',
          'Designing high-converting homepages, hero banners, and collection pages',
          'Creating policy pages (Refund, Shipping, Terms) and navigation menus'
        ]
      },
      {
        title: 'Product Management & Inventory',
        items: [
          'Adding single and variant products (sizes, colors, SKUs)',
          'Writing persuasive product descriptions and pricing strategies',
          'Organizing automated and manual product collections'
        ]
      },
      {
        title: 'Shipping, Payments & Order Fulfillment',
        items: [
          'Setting up Cash on Delivery (COD) for Pakistan (TCS, Leopards, Trax, Call Courier)',
          'Setting up international payments & checkout flow',
          'Order processing, tracking numbers, customer emails, and return handling'
        ]
      }
    ],
    outcomes: [
      'Build fully functional, attractive Shopify stores ready to accept sales',
      'Properly configure Cash on Delivery (COD) and courier logistics for Pakistani buyers',
      'Manage inventory, collections, customer data, and discount promotions',
      'Provide Shopify store creation services to local brand owners'
    ]
  },
  {
    id: 'meta-ads',
    title: 'Meta Ads (Facebook & Instagram Advertising)',
    tagline: 'Drive Sales, Leads & Footfall With Data-Driven Social Media Ads',
    badge: 'High ROI Digital Marketing',
    duration: '1.5 Months (Live Campaign Demos)',
    level: 'All Levels',
    overview: 'Learn how to generate real revenue and inquiries using Meta Ads Manager. Master audience targeting, ad creatives, lead forms, WhatsApp chat ads, and budget optimization for e-commerce and local businesses.',
    modules: [
      {
        title: 'Meta Advertising Fundamentals & Assets',
        items: [
          'Facebook Pages, Instagram Professional Accounts & Business Manager',
          'Meta Ads Manager interface, account billing, and payment methods in Pakistan',
          'Understanding Campaign Objectives (Awareness, Traffic, Leads, Sales)'
        ]
      },
      {
        title: 'Audience Targeting & Demographics',
        items: [
          'Core targeting: Location (Karachi, specific areas, Pakistan), Age, Gender & Interests',
          'Custom Audiences: website visitors, customer lists & engaged followers',
          'Lookalike audiences and detailed behavioral targeting strategies'
        ]
      },
      {
        title: 'Ad Creatives, Copywriting & Formats',
        items: [
          'Designing high-click image & video ad creatives (using Canva & templates)',
          'Writing compelling Urdu & English ad headlines and persuasive copy',
          'Single image ads, carousel ads, Instagram Stories/Reels ads',
          'Click-to-WhatsApp ads for direct customer conversations'
        ]
      },
      {
        title: 'Campaign Optimization & Budgeting',
        items: [
          'A/B testing ad creatives and audience segments',
          'Setting daily vs lifetime budgets and understanding CPC, CPM, and ROAS',
          'Meta Pixel setup basics and conversion event tracking',
          'Scaling winning ad sets without wasting budget'
        ]
      }
    ],
    outcomes: [
      'Create and launch targeted Facebook & Instagram ad campaigns independently',
      'Generate direct WhatsApp inquiries and phone leads for local institutes or businesses',
      'Run profitable product sales campaigns for e-commerce and Shopify stores',
      'Measure and optimize ad spend to achieve highest return on investment'
    ]
  }
];

export const TIMETABLE_SLOTS = [
  {
    time: '2:00 PM – 3:30 PM',
    slotName: 'Afternoon Batch 1',
    schoolSession: 'Class IX (Science & Computer)',
    collegeSession: 'Class XI (Pre-Eng & Pre-Med)',
    computerLab: 'MS Office Practical Workstation Batch A'
  },
  {
    time: '3:30 PM – 5:00 PM',
    slotName: 'Afternoon Batch 2',
    schoolSession: 'Class X (Matric Revision & Board Drills)',
    collegeSession: 'Class XII (Board Model Paper Series)',
    computerLab: 'WordPress Website Lab Project'
  },
  {
    time: '5:00 PM – 6:30 PM',
    slotName: 'Evening Batch 1',
    schoolSession: 'Class IX & X Math & Science Doubt Clearing',
    collegeSession: 'Intermediate Commerce & ICS Batch',
    computerLab: 'Shopify Store Creation & E-Commerce Lab'
  },
  {
    time: '6:30 PM – 8:00 PM',
    slotName: 'Evening Batch 2',
    schoolSession: 'Special Board Exam Revision & Past Papers',
    collegeSession: 'ADC (Associate Degree in Commerce - Accounts/Cost)',
    computerLab: 'Meta Ads Manager & Live Campaign Optimization'
  }
];

export const FREQUENT_QUESTIONS = [
  {
    question: 'Where is Noble Computers & Coaching Centre located?',
    answer: 'We are conveniently located at Izhan Garden, Parsi Colony, Soldier Bazar, Karachi, Pakistan. Our premises are easily accessible from Soldier Bazar No. 1, 2, 3, Nishtar Park, Britto Road, and surrounding central Karachi neighborhoods.'
  },
  {
    question: 'What are the daily operating and class timings?',
    answer: 'Our institute is open Monday through Saturday from 2:00 PM to 8:00 PM. Classes are scheduled in systematic 1.5-hour batches to suit school, college, and degree students, as well as computer learners.'
  },
  {
    question: 'Do you prepare students according to the Karachi Board syllabus?',
    answer: 'Yes! Classes IX and X are strictly coached according to the Board of Secondary Education Karachi (BSEK) syllabus. Classes XI and XII follow the Board of Intermediate Education Karachi (BIEK) curriculum, while ADC follows the University of Karachi syllabus.'
  },
  {
    question: 'Are the computer courses practical and hands-on?',
    answer: 'Absolutely. Every student in MS Office, WordPress, Shopify, and Meta Ads gets their own dedicated computer workstation in our air-conditioned computer lab. Practical exercises and real-world projects are assigned in every single session.'
  },
  {
    question: 'Can I enroll for single subject coaching or full group?',
    answer: 'Both options are available. Students can enroll for the complete group package or select specific challenging subjects like Mathematics, Physics, Chemistry, Accounting, or Computer Science.'
  },
  {
    question: 'How can I enroll or inquire about fees?',
    answer: 'You can click "Enroll Now" on this website, send us a message via WhatsApp, or call directly at 0303-2998881. You are also warmly welcome to visit our campus in Soldier Bazar between 2:00 PM and 8:00 PM.'
  }
];
