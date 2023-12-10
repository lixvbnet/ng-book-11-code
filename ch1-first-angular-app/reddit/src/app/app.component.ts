import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[] = [
    new Article("Angular", "https://angular.io", 3),
    new Article("Fullstack", "https://fullstack.io", 2),
    new Article("Angular Homepage", "https://angular.io", 1)
  ]

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article. title: ${title.value}, link: ${link.value}`)
    // console.log(title)
    // console.log(link)
    return false
  }
}
