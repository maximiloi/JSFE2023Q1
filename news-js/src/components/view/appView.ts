import News from './news/news';
import Sources from './sources/sources';
import { UArticles, UNews, USources, UNewsCompany } from '../../types/index';

export class AppView {
  public news: News;

  public sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  public drawNews(data: UArticles): void {
    const values: UNews[] = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  public drawSources(data: USources): void {
    const values: UNewsCompany[] = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
