export interface UOption {
  [key: string]: string;
}

export interface UEndpoint {
  endpoint: string;
  options: UOption;
}