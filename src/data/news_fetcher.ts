import { NewsItem } from "../models/news_item.js";

/// Отвечает за получение новостей
export class NewsFetcher {
    getNews(): NewsItem[] {
        return [
            new NewsItem('DR NICOLE SAPHIER: What RFK Jr must do to win over skeptical senators – and Americans - Fox News', 'https://static.foxnews.com/foxnews.com/content/uploads/2024/08/rfk-jr.jpg', 'Nicole Saphier'),
            new NewsItem('DR NICOLE SAPHIER: What RFK Jr must do to win over skeptical senators – and Americans - Fox News', 'https://static.foxnews.com/foxnews.com/content/uploads/2024/08/rfk-jr.jpg', 'Nicole Saphier'),
            new NewsItem('DR NICOLE SAPHIER: What RFK Jr must do to win over skeptical senators – and Americans - Fox News', 'https://static.foxnews.com/foxnews.com/content/uploads/2024/08/rfk-jr.jpg', 'Nicole Saphier'),
        ];
    }
}
