import { NewsFetcher } from "../data/news_fetcher.js";
export class NewsPageController {
    _newsFetcher = new NewsFetcher();
    _news = [];
    initNews() {
        this._addNews();
    }
    async _addNews() {
        await this._getNews();
        this._showNews();
    }
    async _getNews() {
        const news = await this._newsFetcher.getTopHeadlines();
        this._news.push(...news);
    }
    _showNews() {
        for (const news of this._news) {
            console.log(`
            ${news.title}
            ${news.author}
            ${news.imageUrl}
            ${news.articleUrl}
            `);
        }
    }
}
