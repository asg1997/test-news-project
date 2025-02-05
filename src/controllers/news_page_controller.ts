import { NewsFetcher } from "../data/news_fetcher.js";
import { NewsItem } from "../models/news_item.js";

export class NewsPageController {


    private _newsFetcher = new NewsFetcher();
    private _news: NewsItem[] = [];



    initNews() {
        this._addNews();
    }

    private async _addNews() {
        await this._getNews();
        this._showNews();
    }

    private async _getNews() {
        const news = await this._newsFetcher.getTopHeadlines();
        this._news.push(...news);

    }
    private _showNews() {

        for (const news of this._news) {
            console.log(`
            ${news.title}
            ${news.author}
            ${news.imageUrl}
            ${news.articleUrl}
            `)
        }
    }


}