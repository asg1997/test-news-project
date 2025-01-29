import { NewsFetcher } from "../data/news_fetcher.js";
export class NewsPageController {
    constructor(document) {
        this._document = document;
    }
    _document;
    _newsFetcher = new NewsFetcher();
    _news = [];
    _newsContainer;
    initNewsPage() {
        this._newsContainer = this._document.getElementById('news-container');
        this._addNews();
    }
    _addNews() {
        this._getNews();
        this._showNews();
    }
    _getNews() {
        const news = this._newsFetcher.getTopHeadlines();
        this._news.push(...news);
    }
    _showNews() {
        const templateCell = this._document.getElementById('template-cell');
        for (const news of this._news) {
            const newsItemElement = templateCell.cloneNode(true);
            this._fillNewsItem(newsItemElement, news);
            newsItemElement.removeAttribute('id');
            newsItemElement.style.display = 'flex';
            this._newsContainer?.appendChild(newsItemElement);
        }
    }
    _fillNewsItem(newsItemElement, newsItem) {
        const imageElement = newsItemElement.querySelector('.image');
        const textElement = newsItemElement.querySelector('.text');
        const authorElement = newsItemElement.querySelector('.author');
        // Заполняем данные в ячейку
        if (imageElement) {
            imageElement.src = newsItem.imageUrl;
            imageElement.alt = 'News Image';
        }
        if (textElement) {
            textElement.textContent = newsItem.title;
        }
        if (authorElement) {
            authorElement.textContent = `Автор: ${newsItem.author || 'Неизвестно'}`;
        }
    }
}
