import type { BlogPost, BlogCategory } from '../types/blog';

export const blogCategories: BlogCategory[] = [
  {
    id: '1',
    name: 'Security',
    slug: 'security'
  },
  {
    id: '2',
    name: 'Privacy',
    slug: 'privacy'
  },
  {
    id: '3',
    name: 'How-to Guides',
    slug: 'how-to-guides'
  },
  {
    id: '4',
    name: 'Tips & Tricks',
    slug: 'tips-tricks'
  },
  {
    id: '5',
    name: 'Technology',
    slug: 'technology'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Why Long-Term Temporary Emails Are Better Than 10-Minute Ones',
    slug: 'why-long-term-temp-emails-better',
    excerpt: 'Discover why Boomlify\'s 2+ month temporary emails provide more value and flexibility compared to short-lived alternatives.',
    content: '<p>Long-term temporary emails offer significant advantages over short-lived ones. Learn why our 2+ month validity period is the perfect balance between convenience and security.</p>',
    author: 'Team Boomlify',
    date: '2024-03-15',
    readTime: '5 min read',
    category: 'Tips & Tricks',
    tags: ['temporary email', 'email privacy', 'productivity'],
    image: 'https://images.unsplash.com/photo-1496096265110-f83ad7f96608?auto=format&fit=crop&w=800&q=80',
    metaDescription: 'Learn why long-term temporary emails lasting 2+ months are superior to 10-minute disposable addresses for privacy and convenience.'
  },
  {
    id: '2',
    title: 'How to Protect Your Privacy Online Using Temporary Emails',
    slug: 'protect-privacy-with-temp-emails',
    excerpt: 'Learn essential tips and strategies for maintaining your online privacy with temporary email addresses.',
    content: '<p>Your online privacy is crucial in today\'s digital world. Discover how temporary emails can help protect your identity and personal information.</p>',
    author: 'Privacy Expert',
    date: '2024-03-10',
    readTime: '7 min read',
    category: 'Privacy',
    tags: ['privacy', 'security', 'online protection'],
    image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&w=800&q=80',
    metaDescription: 'Comprehensive guide on using temporary emails to enhance your online privacy and protect personal information.'
  },
  {
    id: '3',
    title: 'The Ultimate Guide to Managing Multiple Temporary Emails',
    slug: 'managing-multiple-temp-emails',
    excerpt: 'Master the art of organizing and managing multiple temporary email addresses efficiently with Boomlify.',
    content: '<p>Managing multiple temporary emails can be challenging. Learn our best practices for keeping your temporary inboxes organized and efficient.</p>',
    author: 'Tech Guide',
    date: '2024-03-05',
    readTime: '6 min read',
    category: 'How-to Guides',
    tags: ['organization', 'productivity', 'email management'],
    image: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?auto=format&fit=crop&w=800&q=80',
    metaDescription: 'Learn effective strategies for managing multiple temporary email addresses with our comprehensive guide.'
  },
  {
    id: '4',
    title: 'Understanding Email Security: Best Practices for Temporary Emails',
    slug: 'email-security-best-practices',
    excerpt: 'Essential security practices to keep your temporary email communications safe and private.',
    content: '<p>Security is paramount when using temporary email services. Learn how to protect yourself and your communications effectively.</p>',
    author: 'Security Expert',
    date: '2024-03-01',
    readTime: '8 min read',
    category: 'Security',
    tags: ['security', 'best practices', 'email protection'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    metaDescription: 'Learn essential security practices for using temporary emails safely and protecting your privacy online.'
  },
  {
    id: '5',
    title: 'The Future of Temporary Email Services',
    slug: 'future-of-temp-emails',
    excerpt: 'Explore upcoming trends and innovations in temporary email technology and privacy protection.',
    content: '<p>The landscape of temporary email services is evolving. Discover the latest trends and future developments in email privacy technology.</p>',
    author: 'Tech Analyst',
    date: '2024-02-28',
    readTime: '6 min read',
    category: 'Technology',
    tags: ['future tech', 'innovation', 'trends'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    metaDescription: 'Discover the future trends and innovations shaping temporary email services and digital privacy.'
  },
  {
    id: '6',
    title: 'Using Temporary Emails for Online Shopping',
    slug: 'temp-emails-for-shopping',
    excerpt: 'How to use temporary emails to protect your privacy while enjoying online shopping.',
    content: '<p>Online shopping can expose your email to marketing lists. Learn how to shop safely while protecting your privacy.</p>',
    author: 'Shopping Expert',
    date: '2024-02-25',
    readTime: '5 min read',
    category: 'Tips & Tricks',
    tags: ['shopping', 'privacy', 'practical tips'],
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
    metaDescription: 'Learn how to shop online safely using temporary emails to protect your privacy and avoid spam.'
  },
  {
    id: '7',
    title: 'GDPR Compliance and Temporary Emails',
    slug: 'gdpr-and-temp-emails',
    excerpt: 'Understanding how temporary email services comply with GDPR requirements.',
    content: '<p>GDPR has significant implications for email services. Learn how we ensure compliance while protecting your privacy.</p>',
    author: 'Legal Expert',
    date: '2024-02-20',
    readTime: '7 min read',
    category: 'Privacy',
    tags: ['GDPR', 'compliance', 'regulations'],
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80',
    metaDescription: 'Comprehensive guide on GDPR compliance in temporary email services and what it means for users.'
  },
  {
    id: '8',
    title: 'Temporary Emails for Software Testing',
    slug: 'temp-emails-software-testing',
    excerpt: 'How developers can use temporary emails effectively for testing applications.',
    content: '<p>Software testing often requires multiple email addresses. Discover how to streamline your testing process with temporary emails.</p>',
    author: 'Dev Guide',
    date: '2024-02-15',
    readTime: '6 min read',
    category: 'How-to Guides',
    tags: ['development', 'testing', 'software'],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    metaDescription: 'Guide for developers on using temporary emails effectively in software testing and development.'
  },
  {
    id: '9',
    title: 'Avoiding Spam with Temporary Emails',
    slug: 'avoiding-spam-temp-emails',
    excerpt: 'Strategies to keep your primary inbox clean using temporary email addresses.',
    content: '<p>Spam can quickly overwhelm your primary inbox. Learn effective strategies for managing unwanted emails.</p>',
    author: 'Email Expert',
    date: '2024-02-10',
    readTime: '5 min read',
    category: 'Security',
    tags: ['spam prevention', 'email management', 'privacy'],
    image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&w=800&q=80',
    metaDescription: 'Learn effective strategies for avoiding spam and keeping your primary inbox clean with temporary emails.'
  },
  {
    id: '10',
    title: 'Temporary Emails for Social Media',
    slug: 'temp-emails-social-media',
    excerpt: 'How to use temporary emails for social media accounts while maintaining privacy.',
    content: '<p>Social media platforms often require email verification. Learn how to maintain privacy while using social networks.</p>',
    author: 'Social Media Expert',
    date: '2024-02-05',
    readTime: '6 min read',
    category: 'Tips & Tricks',
    tags: ['social media', 'privacy', 'online accounts'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
    metaDescription: 'Guide to using temporary emails for social media accounts while protecting your privacy.'
  },
  {
    id: '11',
    title: 'Email Privacy in the Digital Age',
    slug: 'email-privacy-digital-age',
    excerpt: 'Understanding the importance of email privacy in today\'s connected world.',
    content: '<p>Digital privacy is more important than ever. Learn why email privacy matters and how to protect yourself.</p>',
    author: 'Privacy Advocate',
    date: '2024-02-01',
    readTime: '7 min read',
    category: 'Privacy',
    tags: ['digital privacy', 'cybersecurity', 'online safety'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    metaDescription: 'Explore the importance of email privacy in the digital age and learn how to protect your communications.'
  },
  {
    id: '12',
    title: 'Temporary Emails for Online Forums',
    slug: 'temp-emails-forums',
    excerpt: 'Best practices for using temporary emails when participating in online forums.',
    content: '<p>Online forums are valuable communities. Learn how to participate while protecting your privacy.</p>',
    author: 'Community Manager',
    date: '2024-01-28',
    readTime: '5 min read',
    category: 'How-to Guides',
    tags: ['forums', 'online communities', 'privacy'],
    image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=800&q=80',
    metaDescription: 'Learn how to use temporary emails effectively for online forum participation while maintaining privacy.'
  },
  {
    id: '13',
    title: 'Securing Your Digital Identity',
    slug: 'securing-digital-identity',
    excerpt: 'Comprehensive guide to protecting your digital identity using temporary emails.',
    content: '<p>Your digital identity is valuable. Discover how temporary emails can help protect it.</p>',
    author: 'Security Specialist',
    date: '2024-01-25',
    readTime: '8 min read',
    category: 'Security',
    tags: ['digital identity', 'security', 'privacy'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    metaDescription: 'Comprehensive guide on protecting your digital identity using temporary email services.'
  },
  {
    id: '14',
    title: 'Temporary Emails for Newsletter Subscriptions',
    slug: 'temp-emails-newsletters',
    excerpt: 'How to manage newsletter subscriptions without cluttering your main inbox.',
    content: '<p>Newsletters can provide valuable information but often lead to inbox overflow. Learn how to manage them effectively.</p>',
    author: 'Email Manager',
    date: '2024-01-20',
    readTime: '5 min read',
    category: 'Tips & Tricks',
    tags: ['newsletters', 'email management', 'organization'],
    image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=800&q=80',
    metaDescription: 'Learn how to manage newsletter subscriptions effectively using temporary email addresses.'
  },
  {
    id: '15',
    title: 'Advanced Email Privacy Techniques',
    slug: 'advanced-email-privacy',
    excerpt: 'Expert-level strategies for maximizing your email privacy and security.',
    content: '<p>Take your email privacy to the next level with these advanced techniques and strategies.</p>',
    author: 'Privacy Expert',
    date: '2024-01-15',
    readTime: '10 min read',
    category: 'Security',
    tags: ['advanced security', 'privacy', 'email protection'],
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=800&q=80',
    metaDescription: 'Advanced guide to email privacy techniques and strategies for maximum security.'
  },
  {
    id: '16',
    title: 'Temporary Emails for Job Hunting',
    slug: 'temp-emails-job-hunting',
    excerpt: 'How to use temporary emails effectively during your job search.',
    content: '<p>Job hunting requires sharing your email with many platforms. Learn how to manage this process securely.</p>',
    author: 'Career Coach',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'How-to Guides',
    tags: ['job search', 'career', 'privacy'],
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80',
    metaDescription: 'Guide to using temporary emails effectively during job hunting while maintaining privacy.'
  },
  {
    id: '17',
    title: 'Email Privacy Laws Around the World',
    slug: 'email-privacy-laws',
    excerpt: 'Understanding different email privacy regulations across global jurisdictions.',
    content: '<p>Email privacy laws vary by country. Learn about key regulations and how they affect you.</p>',
    author: 'Legal Analyst',
    date: '2024-01-05',
    readTime: '8 min read',
    category: 'Privacy',
    tags: ['legal', 'regulations', 'international'],
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
    metaDescription: 'Overview of email privacy laws and regulations across different countries and jurisdictions.'
  },
  {
    id: '18',
    title: 'Temporary Emails for Online Gaming',
    slug: 'temp-emails-gaming',
    excerpt: 'Protecting your privacy while enjoying online gaming communities.',
    content: '<p>Online gaming often requires email registration. Learn how to protect your privacy while gaming.</p>',
    author: 'Gaming Expert',
    date: '2024-01-01',
    readTime: '5 min read',
    category: 'Tips & Tricks',
    tags: ['gaming', 'online games', 'privacy'],
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    metaDescription: 'Guide to using temporary emails for online gaming while maintaining privacy and security.'
  },
  {
    id: '19',
    title: 'Comparing Email Privacy Services',
    slug: 'comparing-email-privacy',
    excerpt: 'A detailed comparison of different email privacy services and solutions.',
    content: '<p>Many email privacy services exist. Learn how they compare and which best suits your needs.</p>',
    author: 'Tech Reviewer',
    date: '2023-12-28',
    readTime: '9 min read',
    category: 'Technology',
    tags: ['comparison', 'email services', 'privacy tools'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    metaDescription: 'Comprehensive comparison of different email privacy services and their features.'
  },
  {
    id: '20',
    title: 'Future of Email Privacy Technology',
    slug: 'future-email-privacy',
    excerpt: 'Exploring upcoming technologies and trends in email privacy protection.',
    content: '<p>Email privacy technology continues to evolve. Discover what the future holds for email security.</p>',
    author: 'Tech Futurist',
    date: '2023-12-25',
    readTime: '7 min read',
    category: 'Technology',
    tags: ['future tech', 'innovation', 'privacy'],
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
    metaDescription: 'Insights into the future of email privacy technology and upcoming innovations.'
  }
];