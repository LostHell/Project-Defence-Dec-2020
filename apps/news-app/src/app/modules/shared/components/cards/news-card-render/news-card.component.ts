import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news-card-reader',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})
export class NewsCardComponent {
  @Input() item: {
    objectId: string;
    imageUrl: string;
    content: string;
    title: string;
  };
  @Input() buttonHide: boolean;
  @Input() routerLink: string;
}
