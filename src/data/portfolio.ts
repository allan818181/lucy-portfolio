import type { DriveItem, Project, SkillCategory, StatItem, TimelineItem } from '@/types';

export const personalInfo = {
  name: 'Lucy Bonifas',
  title: 'Creative Designer & Brand Strategist',
  tagline: 'crafting bold brands, beautiful visuals, and memorable experiences.',
  description:
    'I breathe life into brands through intentional design, storytelling, and a deep love for the creative process. From logo identities to full social media campaigns, I turn ideas into visuals that stop the scroll.',
  email: 'lucybonifas@gmail.com',
  phone: '0712345678',
  location: 'Dar es Salaam, Tanzania',
  avatar: '/images/image.png'
  
};

export const heroStats: StatItem[] = [
  { value: '60+', label: 'Brands Built' },
  { value: '5.0', label: 'Client Rating' },
];

export const aboutParagraphs: string[] = [
  "I'm Lucy Bonifas — a creative soul born and raised in the heart of Dar es Salaam, Tanzania. My journey into design began not in a classroom but in a neighborhood full of color, culture, and stories begging to be told.",
  "Over 3 years, I've partnered with local businesses, community groups, and entrepreneurs to craft visual identities that feel authentic, memorable, and deeply human. Good design, I believe, should feel like a warm handshake — instantly trustworthy and impossible to forget.",
  "Whether I'm designing a brand identity from scratch, curating a social media feed, or shooting photos that capture a moment's soul — I pour genuine heart into every single pixel.",
];

export const quoteText =
  "Design is not just how things look — it's how they make you feel. I create visuals that whisper to the heart and linger in the memory long after the screen goes dark.";

export const driveItems: DriveItem[] = [
  {
    icon: 'heart',
    title: 'Storytelling First',
    description:
      'Every brand has a story waiting to be told. I listen deeply, then translate that story into shapes, colors, and words that resonate.',
    color: '#FF4D9D',
  },
  {
    icon: 'sparkles',
    title: 'Local & Authentic',
    description:
      'I draw inspiration from Tanzania\'s rich culture — bold patterns, warm textures, and the vibrant energy of Dar es Salaam streets.',
    color: '#00E5B3',
  },
  {
    icon: 'zap',
    title: 'Detail Obsession',
    description:
      'The difference between good and unforgettable is the details — the perfect kerning, the right hue, the composition that feels inevitable.',
    color: '#FFE135',
  },
];

export const byTheNumbers: StatItem[] = [
  { value: '60+', label: 'Brands Designed' },
  { value: '120+', label: 'Happy Clients' },
  { value: '3', label: 'Years Experience' },
];

export const journey: TimelineItem[] = [
  {
    dateRange: '2021\n—\n2022',
    role: 'Freelance Graphic Designer',
    description:
      'Started with flyers and social media posts for local Dar es Salaam businesses. Discovered a talent for turning vague ideas into visuals people loved.',
  },
  {
    dateRange: '2022\n—\n2023',
    role: 'Brand Designer @ CreativHub TZ',
    description:
      'Led brand identity projects for 20+ local businesses. Developed complete visual systems — logos, color palettes, typography, and brand guidelines.',
  },
  {
    dateRange: '2023\n—\nPresent',
    role: 'Creative Director & Photographer',
    description:
      'Running my own creative studio — combining graphic design, photography, and social media strategy to help businesses build unforgettable presences.',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Visual Design',
    subtitle: 'Making things beautiful and meaningful',
    skills: [
      {
        name: 'Brand Identity Design',
        percentage: 97,
        description: 'Logo systems, color theory, typography, brand guidelines',
        icon: 'palette',
      },
      {
        name: 'Graphic Design',
        percentage: 95,
        description: 'Print, digital, marketing materials, illustrations',
        icon: 'pen',
      },
      {
        name: 'UI/UX Design',
        percentage: 85,
        description: 'Figma prototypes, user flows, interface design',
        icon: 'layout',
      },
      {
        name: 'Motion & Video',
        percentage: 78,
        description: 'Animated posts, reels, short-form video editing',
        icon: 'play',
      },
    ],
  },
  {
    title: 'Digital & Social',
    subtitle: 'Building presence and community online',
    skills: [
      {
        name: 'Social Media Strategy',
        percentage: 93,
        description: 'Content calendars, engagement campaigns, analytics',
        icon: 'share',
      },
      {
        name: 'Content Creation',
        percentage: 91,
        description: 'Copywriting, storytelling, caption craft, Canva mastery',
        icon: 'edit',
      },
      {
        name: 'Photography',
        percentage: 88,
        description: 'Product, portrait, event photography & editing',
        icon: 'camera',
      },
      {
        name: 'Digital Marketing',
        percentage: 82,
        description: 'Meta Ads, audience targeting, boosted posts',
        icon: 'trending',
      },
    ],
  },
];

export const designSkills = [
  { name: 'Adobe Photoshop & Illustrator', percentage: 96, icon: 'adobe' },
  { name: 'Figma & Canva Pro', percentage: 94, icon: 'figma' },
];

export const aiSkills = [
  { name: 'AI-Assisted Design (Midjourney)', percentage: 82 },
  { name: 'ChatGPT for Copywriting', percentage: 88 },
  { name: 'AI Video Tools (Runway, Pika)', percentage: 70 },
];

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Pendo Bakehouse',
    subtitle: 'Full Brand Identity',
    description:
      'Complete visual rebrand for a beloved Dar es Salaam bakery — logo, packaging, menu design, and a vibrant Instagram feed that grew their following by 340% in 3 months.',
    image: 'https://picsum.photos/seed/pendoBakery/800/500',
    tech: ['Illustrator', 'Photoshop', 'Canva', 'Instagram'],
    githubUrl: 'https://www.behance.net',
    year: 2024,
    location: 'Dar es Salaam',
  },
  {
    id: 'project-2',
    title: 'Karibu Fest 2024',
    subtitle: 'Event Visual Campaign',
    description:
      'Full design suite for a major Dar es Salaam cultural festival — posters, banners, digital ads, social media assets, and merchandise. Reached 50,000+ people.',
    image: 'https://picsum.photos/seed/karibuFest/800/500',
    tech: ['Photoshop', 'Illustrator', 'Figma', 'Canva'],
    githubUrl: 'https://www.behance.net',
    year: 2024,
    location: 'Dar es Salaam',
  },
  {
    id: 'project-3',
    title: 'Mama Mzuri Clinic',
    subtitle: 'Healthcare Brand & Communications',
    description:
      'Warm, trustworthy brand identity for a local maternal health clinic — logo, brochures, social media templates, and a patient-friendly visual language that builds confidence.',
    image: 'https://picsum.photos/seed/mamaMzuri/800/500',
    tech: ['Illustrator', 'InDesign', 'Canva', 'Photography'],
    githubUrl: 'https://www.behance.net',
    year: 2023,
    location: 'Dar es Salaam',
  },
  {
    id: 'project-4',
    title: 'TechYouth TZ',
    subtitle: 'NGO Visual Identity',
    description:
      'Bold, energetic brand for a youth tech empowerment NGO — complete identity system, pitch deck design, website banners, and a social campaign that attracted international donors.',
    image: 'https://picsum.photos/seed/techYouth/800/500',
    tech: ['Figma', 'Illustrator', 'PowerPoint', 'Canva'],
    githubUrl: 'https://www.behance.net',
    year: 2023,
    location: 'Dar es Salaam',
  },
  {
    id: 'project-5',
    title: 'Dhahabu Fashion',
    subtitle: 'Luxury Fashion Brand',
    description:
      'Elegant, Africa-rooted brand identity for a Tanzanian fashion house — blending traditional kitenge patterns with modern minimalist design for a globally competitive look.',
    image: 'https://picsum.photos/seed/dhahabuFashion/800/500',
    tech: ['Photoshop', 'Illustrator', 'Lightroom', 'Instagram'],
    githubUrl: 'https://www.behance.net',
    year: 2024,
    location: 'Dar es Salaam',
  },
  {
    id: 'project-6',
    title: 'Tumaini School',
    subtitle: 'Education Brand Refresh',
    description:
      'Reimagined visual identity for a local primary school — new logo, uniform designs, stationery, parent-facing communications, and a cheerful classroom mural design.',
    image: 'https://picsum.photos/seed/tumainiSchool/800/500',
    tech: ['Illustrator', 'Canva', 'Photoshop', 'InDesign'],
    githubUrl: 'https://www.behance.net',
    year: 2022,
    location: 'Dar es Salaam',
  },
];

export const socialLinks = [
  { label: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com' },
  { label: 'Instagram', icon: 'instagram', url: 'https://instagram.com' },
  { label: 'Behance', icon: 'behance', url: 'https://behance.net' },
  { label: 'WhatsApp', icon: 'whatsapp', url: 'https://wa.me/255712345678' },
];

export const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Work', id: 'projects' },
  { label: 'Contact', id: 'contact' },
] as const;
