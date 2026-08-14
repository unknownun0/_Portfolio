const STORAGE_KEY = 'ejag-portfolio-state-v1';
const ADMIN_USER = 'admin';
const ADMIN_PASS = 'gomez2003';

const defaultState = {
  projects: [
    {
      id: '01',
      title: 'Heritage Park Taguig Management System',
      role: 'Full-Stack Developer',
      image: './Screenshot 2026-07-15 132524.png',
      link: '',
      github: '',
      video: '',
      tags: ['PHP', 'JavaScript', 'MySQL', 'Tailwind CSS'],
      bullets: [
        'Architected and developed a full-stack web application using PHP, JavaScript, and MySQL to streamline park operations and record management.',
        'Designed a responsive frontend interface with Tailwind CSS, ensuring optimal viewing across desktop and mobile devices.',
        'Implemented backend logic for database management, data retrieval, and secure user interactions.',
      ],
    },
    {
      id: '02',
      title: 'Student Health Record (SHR) & Admin Analytics System',
      role: 'Full-Stack Developer',
      image: './Screenshot 2026-06-09 092009.png',
      link: '',
      github: '',
      video: '',
      tags: ['PHP', 'MySQL', 'JavaScript', 'Tailwind CSS', 'UI/UX'],
      bullets: [
        'Designed and built an interactive analytics dashboard interface using Tailwind CSS, JavaScript, and institutional color branding.',
        'Configured backend database routes in PHP/MySQL to pull dynamic metrics for system administrators and medical staff.',
        'Integrated role-based documentation workflows and system security access practices.',
      ],
    },
    {
      id: '03',
      title: 'Online Booking System (Roma Bus)',
      role: 'Full-Stack Developer',
      image: './2.png',
      link: '',
      github: '',
      video: '',
      tags: ['PHP', 'MySQL', 'XAMPP', 'AI Chatbot', 'Analytics'],
      bullets: [
        'Developed a web-based bus booking platform enabling travelers to view real-time bus availability, schedules, driver details, and locations.',
        'Integrated an AI chatbot to provide automated, real-time responses regarding bus schedules, fares, and bus types.',
        'Built a sales analytics dashboard featuring dynamic data charts, moving averages, printable receipts, and automated email notifications.',
      ],
    },
    {
      id: '04',
      title: 'Online Grading Management System AZGH College Inc.',
      role: 'Full-Stack Developer',
      image: '',
      link: '',
      github: '',
      video: '',
      tags: ['PHP', 'XAMPP', 'HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript'],
      bullets: [
        'Built a web-based grading system to automate grade computation across Performance Tasks, Written Works, and Examinations.',
        'Automated email notifications sent directly to students upon grade posting by administrators.',
        'Designed an accessible, user-friendly frontend interface using HTML5, CSS3, Tailwind CSS, and JavaScript.',
      ],
    },
  ],
  certifications: [
    {
      name: 'Python',
      issuer: 'freeCodeCamp',
      link: 'https://freecodecamp.org/certification/fccaada7d45-00a6-4feb-a757-d51238c2ebea/python-v9',
      image: './cert3.png',
    },
    {
      name: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      link: 'https://freecodecamp.org/certification/fccaada7d45-00a6-4feb-a757-d51238c2ebea/responsive-web-design-v9',
      image: './cert1.png',
    },
    {
      name: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      link: 'https://freecodecamp.org/certification/fccaada7d45-00a6-4feb-a757-d51238c2ebea/javascript-v9',
      image: './cert4.png',
    },
  ],
  skills: [
    { cat: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Next.js', 'Tailwind CSS', 'Styled Components', 'Webpack', 'Responsive Design'] },
    { cat: 'Backend & Databases', items: ['PHP', 'Node.js', 'Express.js', 'NestJS', 'Laravel', 'Python', 'Java', 'FastAPI', 'MySQL', 'XAMPP'] },
    { cat: 'AI & API Integration', items: ['RESTful APIs', 'API Integration', 'AI Chatbot Integration', 'OpenAI API', 'LangChain', 'TensorFlow', 'PyTorch'] },
    { cat: 'Tools & Workflow', items: ['Git', 'GitHub', 'GitLab', 'VS Code', 'PyCharm', 'Browser DevTools', 'Prettier'] },
    { cat: 'CMS & No-Code', items: ['WordPress', 'Webflow', 'Bubble', 'Microsoft Power Platform'] },
    { cat: 'Design & Multimedia', items: ['UI/UX Fundamentals', 'Graphic Design (Canva, Photoshop)', 'Video Editing (CapCut, Premiere)'] },
    { cat: 'QA & Strategy', items: ['System Debugging', 'Testing', 'Code Optimization', 'Social Media Strategy', 'Digital Marketing'] },
    { cat: 'Interpersonal & Ops', items: ['Multitasking Under Pressure', 'Customer Service', 'Event Promotion'] },
  ],
  experience: [
    {
      title: 'Web Development Engineer Intern',
      org: 'St. Dominic College of Asia    ICT Department',
      date: 'Feb 2026    Apr 2026',
      bullets: [
        'Developed and maintained frontend web application components using HTML5, Tailwind CSS, JavaScript, and PHP.',
        'Integrated system APIs and assisted in database management tasks using MySQL.',
        'Collaborated on technical documentation, including user guide manuals and system flow charts.',
        'Conducted system debugging and performance testing across multiple device viewports to ensure responsive design compliance.',
      ],
    },
    {
      title: 'Club Promoter & Host',
      org: 'Various Venues (Quezon City, PoblaciÃƒÂ³n, Malate)',
      date: '2024    2025',
      bullets: [
        'Promoted nightlife events and hosted club programs, directly enhancing event turnout and guest experience.',
        'Managed audience engagement and marketing campaigns across multiple social media platforms.',
      ],
    },
    {
      title: 'Social Media Editor',
      org: 'JE Consumer Goods and Trading',
      date: '2023',
      bullets: [
        'Created publication materials and executed social media content strategies.',
        'Scaled company social media following from 10,000 to 25,000 within 3 months through high-converting product posts.',
      ],
    },
    {
      title: 'Barista / Graphic Designer',
      org: "Bimbo's Coffee Shop, Las PiÃƒÂ±as",
      date: '2022    2023',
      bullets: [
        'Promoted from Barista to Graphic Designer to lead product visual identity and promotional campaigns.',
        'Designed posters, digital graphics, and video marketing content that elevated brand visibility and customer retention.',
        'Managed counter operations and customer service during peak operational hours.',
      ],
    },
  ],
  education: [
    { school: 'Dr. Filemon C. Aguilar Memorial College, Las PiÃƒÂ±as', degree: 'B.S. Information Systems (BSIS)', years: '2022    2026' },
    { school: 'Zarate College', degree: 'Senior High School Graduate', years: '2020    2022' },
    { school: 'Captain Albert Aguilar National High School', degree: 'High School Graduate', years: '2016    2020' },
  ],
};

const deepClone = (value) => JSON.parse(JSON.stringify(value));

const loadState = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return deepClone(defaultState);
    const parsed = JSON.parse(raw);
    return {
      ...deepClone(defaultState),
      ...parsed,
    };
  } catch {
    return deepClone(defaultState);
  }
};

const saveState = (state) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

const getJsonForEditor = (state) => JSON.stringify(state, null, 2);