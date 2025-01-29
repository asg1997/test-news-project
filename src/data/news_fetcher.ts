import { NewsItem } from "../models/news_item.js";

export class NewsFetcher {
    getTopHeadlines(): NewsItem[] {
        return [
            new NewsItem(
                'Trumps claims military entered California to release water flow, but state says that did not happen - Fox News',
                'Landon Mion',
                'https://static.foxnews.com/foxnews.com/content/uploads/2025/01/us-politics-trump-california-fire-2.jpg',
                'https://www.bbc.com/news/articles/c0qw7z2v1pgo')
        ];
    }
}

