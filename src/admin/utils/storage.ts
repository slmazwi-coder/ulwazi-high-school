// Storage utility — localStorage wrapper (swap with Supabase later)

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  image: string;
  date: string;
}

export interface DocumentItem {
  id: string;
  name: string;
  grade: string;
  subject: string;
  fileData: string; // base64 for demo
  fileName: string;
  uploadDate: string;
}

export interface Application {
  id: string;
  firstName: string;
  lastName: string;
  grade: string;
  dob: string;
  guardianName: string;
  guardianPhone: string;
  guardianEmail: string;
  address: string;
  previousSchool: string;
  status: 'Pending' | 'Reviewed' | 'Accepted' | 'Rejected';
  submittedDate: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  monThu: string;
  friday: string;
  weekend: string;
}

export interface AboutInfo {
  historyParagraphs: string[];
  principalName: string;
  principalTitle: string;
  principalMessage: string[];
}

export interface Activity {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
}

export interface AchieverEntry {
  id: string;
  name: string;
  achievement: string;
  image: string;
}

export interface HallOfFameEntry {
  id: string;
  name: string;
  title: string;
  year: string;
  desc: string;
  image: string;
}

export interface YearResults {
  overall: number;
  bachelor: number;
  bachelorRate: number;
  distinctions: number;
  wrote: number;
  subjects: { subject: string; rate: number }[];
}

// Generic CRUD helpers
function getItems<T>(key: string): T[] {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

function setItems<T>(key: string, items: T[]): void {
  localStorage.setItem(key, JSON.stringify(items));
}

function getObject<T>(key: string, fallback: T): T {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : fallback;
  } catch {
    return fallback;
  }
}

function setObject<T>(key: string, obj: T): void {
  localStorage.setItem(key, JSON.stringify(obj));
}

export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}

// News
const defaultNews: NewsItem[] = [
  {
    id: '1',
    title: "2026 Admissions Open",
    date: "March 15, 2026",
    content: "Applications for the 2026 academic year are now officially open. Please visit the Admissions portal.",
    image: ""
  },
  {
    id: '2',
    title: "Term 1 Reports",
    date: "March 20, 2026",
    content: "Term 1 progress reports will be issued this Friday. Parents are encouraged to attend the briefing.",
    image: ""
  },
  {
    id: '3',
    title: "Regional Athletics Results",
    date: "March 10, 2026",
    content: "Our athletics team secured 1st place in the regional championships! Congratulations to all athletes.",
    image: ""
  }
];
export const getNews = () => getItems<NewsItem>('admin_news').length ? getItems<NewsItem>('admin_news') : defaultNews;
export const setNews = (items: NewsItem[]) => setItems('admin_news', items);

// Documents
export const getDocuments = () => getItems<DocumentItem>('admin_documents');
export const setDocuments = (items: DocumentItem[]) => setItems('admin_documents', items);

// Applications
export const getApplications = () => getItems<Application>('admin_applications');
export const setApplications = (items: Application[]) => setItems('admin_applications', items);

// Contact
const defaultContact: ContactInfo = {
  address: 'Kalinyanga Admin Area, Engcobo, South Africa, 5050',
  phone: '047 050 2369',
  email: 'nyangahighschool@gmail.com',
  monThu: '07:30 - 15:30',
  friday: '07:30 - 13:30',
  weekend: 'Closed',
};
export const getContact = () => getObject<ContactInfo>('admin_contact', defaultContact);
export const setContact = (info: ContactInfo) => setObject('admin_contact', info);

// About
const defaultAbout: AboutInfo = {
  historyParagraphs: [
    'Founded on the principles of excellence and community service, Nyanga High School has grown from a local initiative into a regional powerhouse of academic achievement. Located in the heart of Engcobo, our school has consistently served as a beacon of hope for thousands of learners.',
    'Our journey began with a simple mission: to provide world-class education to the youth of the Eastern Cape. Over the decades, we have expanded our facilities, refined our curriculum, and built a legacy that is reflected in our motto: "Hitch Your Wagon To The Stars."',
    'Today, Nyanga High School is recognized as a leader in Grade 12 results, consistently producing top-tier candidates who go on to excel in universities across South Africa and beyond.',
  ],
  principalName: 'Mr S. Butshingi',
  principalTitle: 'School Principal',
  principalMessage: [
    'Welcome to Nyanga High School. As the Principal, it is my honor to lead an institution that is so deeply committed to the success of its learners. Our vision is not just about academic results, but about producing holistic citizens who are ready to change the world.',
    'We believe in the potential of every student. By providing a disciplined, nurturing, and intellectually stimulating environment, we ensure that our learners can truly hitch their wagons to the stars. Our consistent track record in the Matric results is a testament to the hard work of our dedicated staff and the resilience of our students.',
  ],
};
export const getAbout = () => getObject<AboutInfo>('admin_about', defaultAbout);
export const setAbout = (info: AboutInfo) => setObject('admin_about', info);

// Activities
const defaultActivities: Activity[] = [
  { id: '1', name: 'Soccer', category: 'Sport', description: 'The beautiful game — our teams compete passionately at district and regional tournaments.', image: '' },
  { id: '2', name: 'Rugby', category: 'Sport', description: 'Our flagship sport with a rich history of regional dominance and provincial representation.', image: '' },
  { id: '3', name: 'Netball', category: 'Sport', description: 'Competitive teams across all age groups with provincial accolades.', image: '' },
  { id: '4', name: 'Athletics', category: 'Sport', description: 'Track and field excellence — developing speed, strength, and endurance across all events.', image: '' },
  { id: '5', name: 'Spelling Bee', category: 'Academic', description: 'Sharpening language skills and vocabulary. National-level finalists multiple years running.', image: '' },
  { id: '6', name: 'Debating', category: 'Academic', description: 'Developing critical thinkers and eloquent future leaders through competitive debate.', image: '' },
  { id: '7', name: 'Choral Music', category: 'Culture', description: 'Award-winning choir known for excellence in regional and provincial competitions.', image: '' }
];
export const getActivities = () => getItems<Activity>('admin_activities').length ? getItems<Activity>('admin_activities') : defaultActivities;
export const setActivities = (items: Activity[]) => setItems('admin_activities', items);

// Achievers by year
export const getAchieversByYear = (year: string) => getItems<AchieverEntry>(`admin_achievers_${year}`);
export const setAchieversByYear = (year: string, items: AchieverEntry[]) => setItems(`admin_achievers_${year}`, items);

// Hall of Fame
const defaultHall: HallOfFameEntry[] = [
  { id: '1', name: 'Top Achiever 1', title: '7 Distinctions', year: '2025', desc: '', image: '/Achievements/HALL%20OF%20FAME/2025/Achievers%205.jpg' },
  { id: '2', name: 'Top Achiever 2', title: '6 Distinctions', year: '2025', desc: '', image: '/Achievements/HALL%20OF%20FAME/2025/achievers%203.jpg' },
  { id: '3', name: 'Top Achiever 3', title: 'Top in Math', year: '2025', desc: '', image: '/Achievements/HALL%20OF%20FAME/2025/achievers%204.jpg' },
  { id: '4', name: 'Top Achiever 2024', title: 'Overall Best', year: '2024', desc: '', image: '/Achievements/HALL%20OF%20FAME/2024/1.jpg' },
  { id: '5', name: 'Top Achiever 2023', title: '7 Distinctions', year: '2023', desc: '', image: '/Achievements/HALL%20OF%20FAME/2023/1.jpg' }
];
export const getHallOfFame = () => getItems<HallOfFameEntry>('admin_hall_of_fame').length ? getItems<HallOfFameEntry>('admin_hall_of_fame') : defaultHall;
export const setHallOfFame = (items: HallOfFameEntry[]) => setItems('admin_hall_of_fame', items);

// Results by year
const defaultResults: Record<string, YearResults> = {
  "2025": { overall: 89.9, bachelor: 206, bachelorRate: 71.8, distinctions: 451, wrote: 287, subjects: [{ subject: "Accounting", rate: 90.6 }, { subject: "Mathematics", rate: 71.1 }, { subject: "Physical Sciences", rate: 82.1 }] },
  "2024": { overall: 85.4, bachelor: 195, bachelorRate: 68.2, distinctions: 398, wrote: 286, subjects: [{ subject: "Accounting", rate: 88.5 }, { subject: "IsiXhosa HL", rate: 99.1 }] },
  "2023": { overall: 82.1, bachelor: 178, bachelorRate: 64.5, distinctions: 345, wrote: 276, subjects: [{ subject: "Life Orientation", rate: 100 }, { subject: "Geography", rate: 93.5 }] }
};
export const getResultsByYear = (year: string) => getObject<YearResults | null>(`admin_results_${year}`, defaultResults[year] || null);
export const setResultsByYear = (year: string, data: YearResults) => setObject(`admin_results_${year}`, data);

// Auth
export const isAuthenticated = () => localStorage.getItem('admin_auth') === 'true';
export const login = (password: string): boolean => {
  if (password === 'nyanga2025') {
    localStorage.setItem('admin_auth', 'true');
    return true;
  }
  return false;
};
export const logout = () => localStorage.removeItem('admin_auth');
