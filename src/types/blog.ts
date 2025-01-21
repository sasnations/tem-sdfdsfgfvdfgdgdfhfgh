export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  metaDescription: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
}