export interface UOption {
  [key: string]: string;
}

export interface UEndpoint {
  endpoint: string;
  options: UOption;
}

export interface UResponse {
  sources: UNews[];
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
