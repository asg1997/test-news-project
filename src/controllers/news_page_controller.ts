import { NewsFetcher } from "../data/news_fetcher.js";
import { NewsItem } from "../models/news_item.js";

export class NewsPageController {
    constructor(document: Document) {
        this._document = document;
    }
    private _document: Document;
    private _newsFetcher = new NewsFetcher();
    private _news: NewsItem[] = [];
    private _newsContainer?: HTMLElement;


    initNewsPage() {
        this._newsContainer = this._document.getElementById('news-container')!;
        this._addNews();
    }

    private _addNews() {
        this._getNews();
        this._showNews();
    }

    private _getNews() {
        const news = this._newsFetcher.getTopHeadlines();
        this._news.push(...news);

    }
    private _showNews() {

        const templateCell = this._document.getElementById('template-cell') as HTMLElement;

        for (const news of this._news) {
            const newsItemElement = templateCell.cloneNode(true) as HTMLElement;
            this._fillNewsItem(newsItemElement, news);
            newsItemElement.removeAttribute('id');
            newsItemElement.style.display = 'flex';
            this._newsContainer?.appendChild(newsItemElement);
        }
    }

    private _fillNewsItem(newsItemElement: HTMLElement, newsItem: NewsItem) {
        const imageElement = newsItemElement.querySelector('.image') as HTMLImageElement;
        const textElement = newsItemElement.querySelector('.text') as HTMLParagraphElement;
        const authorElement = newsItemElement.querySelector('.author') as HTMLParagraphElement;

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