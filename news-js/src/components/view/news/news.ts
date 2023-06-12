import './news.css';
import { UNews } from '../../../types/index';

// import newsPlasholderImg from '../../../assets/news_placeholder.jpg';

class News {
  public draw = (data: UNews[]): void => {
    const news: UNews[] = data.length >= 10 ? data.filter((_item, idx): boolean => idx < 10) : data;

    const fragment: DocumentFragment = document.createDocumentFragment();
    const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');

    if (!newsItemTemp) throw new Error('News item template not found!');

    news.forEach((item: UNews, idx: number): void => {
      const newsClone: DocumentFragment = newsItemTemp.content.cloneNode(true) as DocumentFragment;

      if (idx % 2) newsClone.querySelector('.news__item')?.classList.add('alt');

      const metaPhotoEl: Element | null = newsClone.querySelector('.news__meta-photo');
      if (metaPhotoEl instanceof HTMLElement) {
        metaPhotoEl.style.backgroundImage = `url(
          ${item.urlToImage || 'https://clipground.com/images/no-image-png-5.jpg'}
          )`;
      }

      const metaAuthorEl: Element | null = newsClone.querySelector('.news__meta-author');
      if (metaAuthorEl instanceof HTMLElement) {
        metaAuthorEl.textContent = item.author || item.source.name;
      }

      const metaDateEl: Element | null = newsClone.querySelector('.news__meta-date');
      if (metaDateEl instanceof HTMLElement) {
        metaDateEl.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
      }

      const descTitleEl: Element | null = newsClone.querySelector('.news__description-title');
      if (descTitleEl instanceof HTMLElement) {
        descTitleEl.textContent = item.title;
      }

      const descSourceEl: Element | null = newsClone.querySelector('.news__description-source');
      if (descSourceEl instanceof HTMLElement) {
        descSourceEl.textContent = item.source.name;
      }

      const descContentEl: Element | null = newsClone.querySelector('.news__description-content');
      if (descContentEl instanceof HTMLElement) {
        descContentEl.textContent = item.description;
      }

      const readMoreLink: Element | null = newsClone.querySelector('.news__read-more a');
      if (readMoreLink instanceof HTMLAnchorElement) {
        readMoreLink.setAttribute('href', item.url);
      }

      fragment.append(newsClone);
    });

    const newsContainer: Element | null = document.querySelector('.news');

    if (!newsContainer) throw new Error('News container not found!');

    newsContainer.innerHTML = '';
    newsContainer.append(fragment);
  };
}

export default News;
