/**
 * All portfolio content lives here so it is easy to edit later.
 * Update text, links, projects, and education below without touching components.
 */

export const profile = {
  name: 'Siddhesh Kulkarni',
  roles: ['Computer Science Student', 'Developer', 'AI/ML Enthusiast'],
  tagline:
    'Building practical software, exploring AI/ML, and turning ideas into useful products.',
  // Replace these placeholder links with your real ones.
  email: 'Siddheshskul@gmail.com',
  linkedin: 'https://www.linkedin.com/in/siddhesh-kulkarni-97b562236/',
  github: 'https://github.com/siddhesh12346',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export const about = {
  heading: 'A little about me.',
  paragraphs: [
    "I'm a Computer Science student who likes building things that people actually use. Most of my time goes into software development and exploring how AI and machine learning can solve real, everyday problems.",
    "I care about the details — clean code, thoughtful interfaces, and products that feel simple even when the engineering behind them isn't. When I'm not building, I'm usually learning something new or figuring out how to make an idea work in practice.",
  ],
  interests: [
    'Artificial Intelligence & Machine Learning',
    'Software Development',
    'Mobile Application Development',
    'Data & Analytics',
    'Motorsport Technology',
    'UI/UX & Design',
  ],
}

export const experience = [
  {
    company: 'Apastron Industries',
    role: 'Software Development Intern',
    period: '6 Months Internship',
    description:
      'Worked as a software development intern, building a mobile application using Flutter for the Ahilyanagar Municipal Corporation.',
    technologies: ['Flutter', 'Dart', 'Mobile Development', 'Firebase'],
  },
]

export const achievements = [
  {
    tag: 'Hackathons',
    title: 'Competed in 4+ hackathons',
    description:
      'Regularly build and ship projects under time pressure across multiple hackathons.',
  },
  {
    tag: 'HackMIT',
    title: 'Runner-up at HackMIT',
    description: 'Achieved runner-up position at the HackMIT hackathon.',
  },
  {
    tag: 'Hack-X',
    title: 'Design Head — Hack-X',
    description:
      'Served as Design Head of Hack-X, a university-level technology and cybersecurity club.',
  },
  {
    tag: 'Ciphathon',
    title: '24-Hour Hackathon Organizer',
    description:
      "Hosted and organized 24-hour hackathons including Ciphathon '26.",
  },
  {
    tag: 'Research',
    title: 'Published Research Paper',
    description:
      'Published a research paper on a Customer Retention System through Nature/Springer.',
  },
  {
    tag: 'German',
    title: 'A1 German Course Completed',
    description: 'Successfully completed an A1-level German language course.',
  },
]

export type Project = {
  category: string
  title: string
  description: string
  technologies: string[]
  github?: string
  demo?: string
  Paperlink?: string
}

// Placeholder projects — replace titles, descriptions, tech, and links as you add real work.
export const projects: Project[] = [
  {
    category: 'AI / Machine Learning',
    title: 'Customer Retention System',
    description:
      'An AI-powered system that analyzes customer behavior and predicts potential churn, helping businesses identify at-risk customers and improve retention strategies.',
    technologies: ['Python', 'Scikit-learn', 'Machine Learning'],
    github: 'https://github.com/siddhesh12346/Customer-retention-system',
    
  },
  {
    category: 'Software Development',
    title: 'Hostel Management System',
    description:
      'A DBMS project with HTML/CSS frontend, Node.js middleware, and C++ backend/OOP.',
    technologies: ['JavaScript', 'React', 'Node.js'],
    github: '#',
  },
  {
    category: 'Mobile Applications',
    title: 'Ahilyanagar Municipal Corporation',
    description:
      'Built a mobile application during your 6-month internship at Axionyx Industries.',
    technologies: ['Flutter', 'Dart', 'Firebase'],
    github: 'https://github.com/siddhesh12346/ahilyanagar-municipal-project',
    
  },
  {
    category: 'Data & Analytics',
    title: 'Nature Springer Research Paper',
    description:
      'Customer Retention System research paper published in Nature/Springer, focusing on predictive analytics and customer behavior modeling.',
    technologies: ['Python', 'Data Analysis'],
    Paperlink: 'https://link.springer.com/chapter/10.1007/978-3-032-06688-6_23',
  },
]

export const skills = [
  {
    group: 'Languages',
    items: ['C++', 'Python', 'Java', 'JavaScript'],
  },
  {
    group: 'Development',
    items: ['Flutter', 'Dart', 'React', 'HTML', 'CSS', 'Node.js'],
  },
  {
    group: 'AI / Data',
    items: ['Machine Learning', 'Data Analysis', 'Scikit-learn'],
  },
  {
    group: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Firebase'],
  },
]

// Minimal education placeholders — edit freely.
export const education = [
  {

    degree: 'SPM English School',
    institution: '',
    year: '2022',
  },
  {
    degree: 'Int BTech in Computer Science',
    institution: 'MIT World Peace University, Pune',
    year: '2028',
  },
]
