export interface UOption {
  [key: string]: string;
}

export interface UEndpoint {
  endpoint: string;
  options: UOption;
}

export interface UNewsCompany {
  category: string;
  country: string;
  description: string;
  id: string;
  language: string;
  name: string;
  url: string;
}

export interface UNews {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: USource;
  title: string;
  url: string;
  urlToImage: string;
}

interface USource {
  id: string;
  name: string;
}
