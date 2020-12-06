import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { News } from '../../models/News';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent {
  @Input() areaLength = 0;
  @Input() area = [];
  @Input() pageSize = 0;
  @Input() pageSizeOptions = [];
  @Output() pageSlice = new EventEmitter<News[]>();

  constructor() {}

  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;

    if (endIndex > this.areaLength) {
      endIndex = this.areaLength;
    }

    this.pageSlice.emit(this.area.slice(startIndex, endIndex));
  }
}
