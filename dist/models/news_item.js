export class NewsItem {
    title;
    author;
    imageUrl;
    articleUrl;
    constructor(title, author, imageUrl, articleUrl) {
        this.title = title;
        this.author = author;
        this.imageUrl = imageUrl;
        this.articleUrl = articleUrl;
    }
    static fromJson(json) {
        const parsedJson = JSON.parse(json);
        return new NewsItem(parsedJson.title, parsedJson.author, parsedJson.imageUrl, parsedJson.articleUrl);
    }
}
