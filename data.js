const STORAGE_KEY = 'ejag-portfolio-state-v2';
const ADMIN_PASS = 'admingomez';

const defaultState = {
  hero: {
    eyebrow: 'FULL-STACK DEVELOPER · LAS PIÑAS, PH',
    titleLines: ['EARL JOHN', 'GOMEZ', 'BUILDS\u00A0WEB.'],
    lead: 'Versatile full-stack developer & digital content specialist — building responsive web apps, wiring up AI APIs, and shipping backend systems that hold up under real traffic.',
    estTag: 'EST. 2022 — PRESENT',
    portrait: './1.png',
    viewProjectsLabel: 'View Projects',
    resumeLabel: 'Download Resume',
    resumeUrl: './Earl_John_Gomez_Resume.pdf',
  },
  about: {
    paragraphs: [
      'Versatile **Full-Stack Web Developer** and digital content specialist with hands-on experience building responsive web applications, integrating AI APIs, and designing backend system architectures.',
      'Proven track record developing **custom online booking platforms, automated grading systems, and POS solutions** using modern tech stacks — PHP, JavaScript, Tailwind CSS, Python, and Node.js.',
      'Combines strong technical capability with a background in UI/UX design, customer engagement, and high-pressure multitasking.',
    ],
    stats: [
      { num: '4+', lbl: 'Shipped Systems' },
      { num: '3', lbl: 'Certifications' },
      { num: '15+', lbl: 'Tools & Stacks' },
    ],
  },
  skills: [
    { cat: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Next.js', 'Tailwind CSS', 'Webpack'] },
    { cat: 'Backend & DB', items: ['PHP', 'Node.js', 'Express.js', 'NestJS', 'Laravel', 'Python', 'Java', 'FastAPI', 'MySQL'] },
    { cat: 'AI & API', items: ['REST APIs', 'OpenAI API', 'AI Chatbots', 'LangChain', 'TensorFlow', 'PyTorch'] },
    { cat: 'Tools & Design', items: ['Git / GitHub', 'VS Code', 'WordPress', 'Webflow', 'Bubble', 'Figma-grade UI/UX', 'Photoshop'] },
  ],
  projects: [
    {
      id: '01',
      title: 'Heritage Park Taguig Management System',
      role: 'Full-Stack Developer',
      desc: 'Architected a full-stack web app to streamline park operations and record management, with a responsive interface built for both desktop and mobile.',
      bullets: [
        'Designed a responsive frontend with Tailwind CSS for optimal cross-device viewing',
        'Implemented backend logic for database management and data retrieval',
        'Built secure user interaction flows across the platform',
      ],
      stack: ['PHP', 'JavaScript', 'MySQL', 'Tailwind CSS'],
    },
    {
      id: '02',
      title: 'Student Health Record & Admin Analytics System',
      role: 'Full-Stack Developer',
      desc: 'An interactive analytics dashboard for medical staff and administrators, built around institutional color branding and dynamic metrics.',
      bullets: [
        'Designed the dashboard interface with Tailwind CSS and JavaScript',
        'Configured PHP/MySQL backend routes to pull dynamic metrics',
        'Integrated role-based documentation and system security access',
      ],
      stack: ['PHP', 'MySQL', 'Tailwind CSS', 'JavaScript'],
    },
    {
      id: '03',
      title: 'Online Booking System — ROMA Tours Corp.',
      role: 'Full-Stack Developer',
      desc: 'A web-based bus booking platform for real-time availability, schedules, and driver details, with an AI layer on top for customer support.',
      bullets: [
        'Integrated an AI chatbot for real-time schedule, fare, and bus-type queries',
        'Built a sales analytics dashboard with dynamic charts and moving averages',
        'Automated printable receipts and email notifications for approved bookings',
      ],
      stack: ['PHP', 'MySQL', 'XAMPP', 'AI Chatbot'],
    },
    {
      id: '04',
      title: 'Online Grading Management System — AZGH College',
      role: 'Full-Stack Developer',
      desc: 'A grading system automating grade computation across Performance Tasks, Written Works, and Examinations for an entire college.',
      bullets: [
        'Automated grade computation and email notifications to students',
        'Designed an accessible, user-friendly frontend interface',
        'Built with maintainability for non-technical administrators in mind',
      ],
      stack: ['PHP', 'XAMPP', 'HTML5', 'Tailwind CSS'],
    },
  ],
  certifications: [
    {
      name: 'Python',
      issuer: 'freeCodeCamp',
      link: 'https://freecodecamp.org/certification/fccaada7d45-00a6-4feb-a757-d51238c2ebea/python-v9',
      image: './images/cert-python.png',
    },
    {
      name: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      link: 'https://freecodecamp.org/certification/fccaada7d45-00a6-4feb-a757-d51238c2ebea/responsive-web-design-v9',
      image: './images/cert-responsive.png',
    },
    {
      name: 'JavaScript Algorithms & Data Structures',
      issuer: 'freeCodeCamp',
      link: 'https://freecodecamp.org/certification/fccaada7d45-00a6-4feb-a757-d51238c2ebea/javascript-v9',
      image: './images/cert-javascript.png',
    },
  ],
  experience: [
    {
      title: 'Web Development Engineer Intern',
      org: 'St. Dominic College of Asia — ICT Department',
      date: 'FEB 2026 — APR 2026',
      bullets: [
        'Developed and maintained frontend components using HTML5, Tailwind CSS, JavaScript, and PHP',
        'Integrated system APIs and assisted with MySQL database management',
        'Produced technical documentation, including user guides and system flow charts',
        'Ran debugging and performance testing across multiple device viewports',
      ],
    },
    {
      title: 'Club Promoter & Host',
      org: 'Various Venues — Quezon City, Población, Malate',
      date: '2024 — 2025',
      bullets: [
        'Promoted nightlife events and hosted club programs to boost turnout and guest experience',
        'Managed audience engagement and marketing campaigns across social platforms',
      ],
    },
    {
      title: 'Social Media Editor',
      org: 'JE Consumer Goods and Trading',
      date: '2023',
      bullets: [
        'Created publication materials and executed social content strategies',
        'Scaled company following from 10,000 to 25,000 in 3 months via high-converting posts',
      ],
    },
    {
      title: 'Barista / Graphic Designer',
      org: "Bimbo's Coffee Shop, Las Piñas",
      date: '2022 — 2023',
      bullets: [
        'Promoted from Barista to Graphic Designer to lead visual identity and campaigns',
        'Designed posters, digital graphics, and video content that lifted brand visibility',
        'Managed counter operations and customer service during peak hours',
      ],
    },
  ],
  education: [
    { years: '2022 — 2026', school: 'Dr. Filemon C. Aguilar Memorial College, Las Piñas', degree: 'Bachelor of Science in Information Systems (BSIS)' },
    { years: '2020 — 2022', school: 'Zarate College', degree: 'Senior High School Graduate' },
    { years: '2016 — 2020', school: 'Captain Albert Aguilar National High School', degree: 'High School Graduate' },
  ],
  contact: {
    ctaLines: ["Let's build", 'something.'],
    email: 'earljohngomez66@gmail.com',
    phone: '0962 423 8760',
    phoneLink: '+639624238760',
    location: 'Las Piñas City, Philippines',
  },
  footer: {
    brand: 'EARL JOHN GOMEZ © 2026',
    note: 'Built with HTML, CSS & a little web-slinging',
  },
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