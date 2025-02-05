export class NewsItem {
    readonly title: string;
    readonly imageUrl: string;
    readonly author: string;

    constructor(title: string, imageUrl: string, author: string) {
        this.title = title
        this.imageUrl = imageUrl
        this.author = author
    }
}

