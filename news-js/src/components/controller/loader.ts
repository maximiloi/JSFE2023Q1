import { UOption, UEndpoint, EResStatus } from '../../types/index';

class Loader {
  public baseLink: string;

  private options: UOption;

  constructor(baseLink: string, options: UOption) {
    this.baseLink = baseLink;
    this.options = options;
  }

  public getResp(
    { endpoint, options = {} }: UEndpoint,
    callback = (): void => {
      console.error('No callback for GET response');
    },
  ): void {
    this.load('GET', endpoint, callback, options);
  }

  public errorHandler = (res: Response): Response => {
    if (!res.ok) {
      if (res.status === EResStatus.unauthorized || res.status === EResStatus.notFound)
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }

    return res;
  };

  public makeUrl(options: UOption, endpoint: string): string {
    const urlOptions = { ...this.options, ...options };
    let url: string = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key): void => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  public load(method: string, endpoint: string, callback: (data: Response) => void, options: UOption = {}): void {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res): Promise<Response> => res.json())
      .then((data: Response): void => callback(data))
      .catch((err: string): void => console.error(err));
  }
}

export default Loader;
