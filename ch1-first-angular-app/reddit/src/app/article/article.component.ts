import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  // A component host (here is the <app-article> tag) is the element this component is attached to.
  // We can set properties on the host element by using the @HostBinding() decorator
  // Using the @HostBinding() is nice because it means we can encapsulate the app-article markup within our component.
  // That is, we don’t have to both use an app-article tag and require a class="row" in the markup of the parent view.
  // By using the @HostBinding decorator, we’re able to configure our host element from within the component.
  @HostBinding('attr.class') cssClass = 'row'

  @Input() article: Article

  constructor() {
  }

  ngOnInit(): void {
  }

  voteUp(): boolean {
    this.article.voteUp()
    // Return false to tell the browser NOT to propagate the click event upwards.
    // Otherwise Javascript will propagate the click event to all the parent components.
    // Here if the click event is propagated to parents (the <a> tag), our browser will try to follow the empty link, which tells the browser to reload.
    return false
  }

  voteDown(): boolean {
    this.article.voteDown()
    // Return false to tell the browser NOT to propagate the click event upwards.
    return false
  }
}
