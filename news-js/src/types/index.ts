export interface UOption {
  [key: string]: string;
}

export interface UEndpoint {
  endpoint: string;
  options: UOption;
}

export interface UResponse {
  status: string;
  sources: UNews[];
}

type UNews = {
  id: string,
  name: string,
  description: string,
  url: string,
  category: string,
  language: string,
  country: string
};