import { UNews, USources } from '../../types/index';
import AppLoader from './appLoader';

class AppController extends AppLoader {
  public getSources(callback: (data?: USources) => void): void {
    super.getResp({ endpoint: 'sources' }, callback);
  }

  public getNews(e: Event, callback: (data?: UNews) => void): void {
    let target: HTMLElement = e.target as HTMLElement;
    const newsContainer: HTMLElement = e.currentTarget as HTMLElement;

    if (!target) return;

    while (target !== newsContainer) {
      if (target.classList.contains('source__item')) {
        const sourceId = target.getAttribute('data-source-id');
        if (!sourceId) return;

        if (newsContainer.getAttribute('data-source') !== sourceId) {
          newsContainer.setAttribute('data-source', sourceId);
          super.getResp(
            {
              endpoint: 'everything',
              options: {
                sources: sourceId,
              },
            },
            callback,
          );
        }
        return;
      }
      target = target.parentNode as HTMLElement;
    }
  }
}

export default AppController;
