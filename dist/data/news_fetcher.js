import { NewsItem } from "../models/news_item.js";
import axios from './../../node_modules/axios';
export class NewsFetcher {
    async getTopHeadlines() {
        try {
            const response = await axios.get(`https://newsapi.org/v2/top-headlines`, {
                params: {
                    country: 'us',
                    apiKey: '0104952418a044bd866d7d0b8f4617fc'
                }
            });
            // Преобразуем данные из ответа в массив NewsItem
            return response.data.articles.map((article) => new NewsItem(article.title, article.author || 'Unknown', // Если автор не указан, ставим "Unknown"
            article.urlToImage || '', // Если нет изображения, ставим пустую строку
            article.url));
        }
        catch (error) {
            console.error('Error fetching news:', error);
            return []; // Возвращаем пустой массив в случае ошибки
        }
    }
}
