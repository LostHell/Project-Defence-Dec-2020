import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})
export class NewsCardComponent {
  @Input() imageUrl: string;
  @Input() title: string;
  @Input() content: string;
  @Input() buttonHide: boolean;
}
