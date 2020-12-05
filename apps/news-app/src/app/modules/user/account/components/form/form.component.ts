import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AutoUnsubscribe } from '../../../../../core/classes/AutoUnsubscribe';
import { NewsService } from '../../../../../core/services/news/news.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent extends AutoUnsubscribe implements OnInit {
  @Output() caller = new EventEmitter();
  form: FormGroup;

  isSuccess = false;

  newsId: string;

  constructor(
    private newsService: NewsService,
    private dialogConfig: MatDialog
  ) {
    super();
  }

  ngOnInit(): void {
    this.createForm();
  }

  // Forms
  createForm() {
    this.form = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      imageUrl: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      content: new FormControl('', [
        Validators.required,
        Validators.minLength(100),
      ]),
      category: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }

  // Methods
  createNews() {
    if (this.form.valid) {
      if (this.newsId) {
        this.autoUnsubscribe(
          this.newsService.updateNews(this.newsId, this.form.value).subscribe()
        );
      } else {
        this.autoUnsubscribe(
          this.newsService.createNews(this.form.value).subscribe()
        );
      }

      this.isSuccess = true;

      setTimeout(() => {
        this.form.reset();
        this.caller.emit();
      }, 500);

      setTimeout(() => {
        this.closeDialog();
      }, 2500);
    }
  }

  closeDialog() {
    this.form.reset();
    this.dialogConfig.closeAll();
  }
}
