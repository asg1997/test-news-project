export class NewsItem {
    readonly title: string;
    readonly author: string;
    readonly imageUrl: string;
    readonly articleUrl: string;

    constructor(title: string, author: string, imageUrl: string, articleUrl: string) {
        this.title = title;
        this.author = author;
        this.imageUrl = imageUrl;
        this.articleUrl = articleUrl;
    }

    static fromJson(json: string): NewsItem {
        const parsedJson = JSON.parse(json);
        return new NewsItem(
            parsedJson.title,
            parsedJson.author,
            parsedJson.imageUrl,
            parsedJson.articleUrl,
        );




    }

}