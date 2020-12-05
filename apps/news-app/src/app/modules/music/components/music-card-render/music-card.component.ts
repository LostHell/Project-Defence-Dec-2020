import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-music-card',
  templateUrl: './music-card.component.html',
  styleUrls: ['./music-card.component.scss'],
})
export class MusicCardComponent {
  @Input() imageUrl: string;
  @Input() name: string;
  @Input() period: string;
}
