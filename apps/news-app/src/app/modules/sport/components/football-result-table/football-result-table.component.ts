import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-football-result-table',
  templateUrl: './football-result-table.component.html',
  styleUrls: ['./football-result-table.component.scss'],
})
export class FootballResultTableComponent {
  @Input() data = [];
}
