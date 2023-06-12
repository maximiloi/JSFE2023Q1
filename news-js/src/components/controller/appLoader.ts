import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://rss-news-api.onrender.com/', {
      apiKey: '97a2f1568e1746d293951df10676b696',
    });
  }
}

export default AppLoader;
