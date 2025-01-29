import { NewsItem } from "../models/news_item.js";

export class NewsFetcher {
    getTopHeadlines(): NewsItem[] {
        return [
            new NewsItem(
                'title',
                'author',
                'https://www.bbc.com/news/articles/c0qw7z2v1pgo',
                'https://static.foxnews.com/foxnews.com/content/uploads/2025/01/us-politics-trump-california-fire-2.jpg')
        ];
    }
}

