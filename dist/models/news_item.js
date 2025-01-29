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
}
