export const personalInfo = {
  name: 'Abhishek Jadhav',
  role: 'MERN Stack Developer',
  email: 'abhishekjadhav1306@gmail.com',
  phone: '+91 8767473411',
  github: 'https://github.com/Abhishek-jadhav06',
  portfolio: 'https://abhishekjadhav07.vercel.app',
  location: 'Pune, India',
  bio: [
    "Hey there! 🎉 I'm a passionate MERN Stack Developer based in Pune, India, pursuing my B.Tech in Electronics & Telecommunication from PDEA College of Engineering, SPPU! 🎓",
    "I've been diving into web development and embedded systems since my freshman days 💻. From building smart farming platforms to IoT motor controllers — building things is kind of my thing! 💡 🚀",
  ],
  stats: [
    { value: '8.30', label: 'CGPA' },
    { value: '2+',   label: 'Internships' },
    { value: '5+',   label: 'Projects' },
    { value: '5+',   label: 'Awards' },
  ],
};

export const techStack = {
  Frontend: [
    { name: 'JavaScript', icon: 'https://img.icons8.com/color/144/javascript--v1.png' },
    { name: 'React.js',   icon: 'https://img.icons8.com/ultraviolet/120/react--v1.png' },
    { name: 'Tailwind',   icon: 'https://img.icons8.com/color/144/tailwindcss.png' },
    { name: 'HTML5',      icon: 'https://img.icons8.com/color/144/html-5--v1.png' },
    { name: 'CSS3',       icon: 'https://img.icons8.com/color/144/css3.png' },
  ],
  Backend: [
    { name: 'Node.js',    icon: 'https://img.icons8.com/color/144/nodejs.png' },
    { name: 'Express.js', icon: 'https://img.icons8.com/color/144/express-js.png' },
    { name: 'MongoDB',    icon: 'https://img.icons8.com/color/144/mongodb.png' },
    { name: 'MySQL',      icon: 'https://img.icons8.com/color/144/mysql-logo.png' },
    { name: 'Python',     icon: 'https://img.icons8.com/color/144/python--v1.png' },
  ],
  Others: [
    { name: 'Git',          icon: 'https://img.icons8.com/color/144/git.png' },
    { name: 'GitHub',       icon: 'https://img.icons8.com/color/144/github--v1.png' },
    { name: 'Postman',      icon: 'https://img.icons8.com/color/144/postman-api.png' },
    { name: 'Arduino',      icon: 'https://img.icons8.com/color/144/arduino.png' },
    { name: 'Raspberry Pi', icon: 'https://img.icons8.com/color/144/raspberry-pi.png' },
  ],
};

export const projects = [
  {
    id: 1, emoji: '🌾', cat: 'mern',
    title: 'Smart Farming Platform',
    desc: 'Full-stack agricultural platform with 13 services — AI crop disease detection, weather forecasting, soil & NPK analysis, irrigation scheduling, yield prediction, market pricing & expert advisory.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'TailwindCSS'],
    theme: 'linear-gradient(135deg,#064e3b,#065f46)',
    github: 'https://github.com/Abhishek-jadhav06',
  },
  {
    id: 2, emoji: '🍽', cat: 'mern',
    title: 'Mess Management App',
    desc: 'MERN application for hostel/mess management — meal tracking, daily menu, fee collection, attendance, and admin dashboard with real-time reporting.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JWT Auth'],
    theme: 'linear-gradient(135deg,#1e1b4b,#312e81)',
    github: 'https://github.com/Abhishek-jadhav06',
  },
  {
    id: 3, emoji: '⚙️', cat: 'iot',
    title: 'IoT Motor Controller',
    desc: 'ESP32-powered single-phase motor controller with closed-loop feedback. Remote monitoring via Telegram Bot, MQTT telemetry, and Wi-Fi OTA updates — reducing manual intervention by 80%.',
    tags: ['ESP32', 'MQTT', 'Telegram API', 'Embedded C', 'OTA'],
    theme: 'linear-gradient(135deg,#431407,#7c2d12)',
    github: 'https://github.com/Abhishek-jadhav06',
  },
  {
    id: 4, emoji: '🔐', cat: 'iot',
    title: 'Fingerprint Door Lock',
    desc: 'Biometric access control system using Arduino and fingerprint sensor with SQLite database for secure credential storage and tamper-resistant access logging.',
    tags: ['Arduino', 'SQLite', 'Biometrics', 'Embedded C'],
    theme: 'linear-gradient(135deg,#0c4a6e,#075985)',
    github: 'https://github.com/Abhishek-jadhav06',
  },
  {
    id: 5, emoji: '📡', cat: 'web',
    title: 'Real-Time Sensor Dashboard',
    desc: 'Web dashboard for visualising live sensor data (temperature, humidity, proximity) streamed from embedded hardware with sub-10ms latency over I²C/UART interfaces.',
    tags: ['React.js', 'WebSockets', 'Node.js', 'I²C', 'UART'],
    theme: 'linear-gradient(135deg,#3b0764,#581c87)',
    github: 'https://github.com/Abhishek-jadhav06',
  },
];

export const experience = [
  {
    company: 'ProAzure Technologies',
    role: 'MERN Stack Developer Intern',
    period: 'Remote',
    current: true,
    color: '#22c55e',
    points: [
      'Developed and maintained scalable web apps using MongoDB, Express.js, React.js, and Node.js.',
      'Built RESTful APIs with JWT authentication, input validation, and error-handling middleware.',
      'Built responsive frontend components using React Hooks, Context API, and Tailwind CSS.',
      'Participated in code reviews, sprint planning, and Agile delivery cycles.',
    ],
    skills: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JWT', 'TailwindCSS', 'Agile'],
  },
  {
    company: 'Sunshine Powertronics Pvt. Ltd',
    role: 'Embedded & IoT Developer Intern',
    period: 'Jan 2025 – Feb 2025 · On-Site',
    current: false,
    color: '#f59e0b',
    points: [
      'Designed a single-phase motor control system using ESP32 with closed-loop feedback.',
      'Integrated Telegram Bot API for remote monitoring, reducing manual intervention by 80%.',
      'Configured Wi-Fi OTA communication for live telemetry over MQTT protocol.',
    ],
    skills: ['ESP32', 'MQTT', 'Embedded C', 'Telegram API', 'OTA', 'Wi-Fi'],
  },
];

export const education = [
  {
    school: 'PDEA College of Engineering, Pune',
    degree: 'B.Tech – Electronics & Telecommunication',
    period: 'Nov 2022 – Jun 2026 · SPPU',
    current: true,
    points: [
      'CGPA: 8.30',
      'Embedded Systems, IoT & Full-Stack Web Development',
      '2× Robotics Winner — Mindspark & Robotex',
      'DIPEX 2026 Ideal Participation Award · CodeLite Hackathon',
    ],
  },
  {
    school: 'Junior College, Khamgaon',
    degree: 'HSC – 12th (MSBSHSE)',
    period: 'Jun 2021 – Mar 2022',
    current: false,
    points: ['Percentage: 77.50%'],
  },
  {
    school: 'SaneGuruji High School, Latur',
    degree: 'SSC – 10th (MSBSHSE)',
    period: 'Jun 2019 – Mar 2020',
    current: false,
    points: ['Percentage: 91.00%'],
  },
];
