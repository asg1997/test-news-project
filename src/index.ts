import { NewsPageController } from './controllers/news_page_controller.js';


window.onload = function () {
    const pageController = new NewsPageController(document);
    pageController.initNewsPage()
};




