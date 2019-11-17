import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articleList: Article[];
  article: Article;

  constructor() {
    this.articleList = [{
      id: "1",
      title: "cars",
      author: "tariq",
      content: "This is an article about cars",
      comments: ["Ford is the best.", "Honda is the best."]
    },{
      id: "2",
      title: "roads",
      author: "mel",
      content: "This is an article about roads",
      comments: ["Peripheral ring road is the best.", "Outer ring road is the best."]
    }];
  }

  getArticleById = (id: string): Observable<Article> => {
    return
  }
}
