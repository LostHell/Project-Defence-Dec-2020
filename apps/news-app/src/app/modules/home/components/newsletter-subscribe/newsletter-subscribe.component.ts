import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NewsletterCredentials } from '../../../shared/models/NewsletterCredentials';

@Component({
  selector: 'app-newsletter-subscribe',
  templateUrl: './newsletter-subscribe.component.html',
  styleUrls: ['./newsletter-subscribe.component.scss'],
})
export class NewsletterSubscribeComponent {
  @Output() submitData = new EventEmitter<NewsletterCredentials>();
  @Input() form: FormGroup;
  @Input() showSuccessfullySubscribed: boolean;

  constructor() {}

  onSubmit() {
    this.submitData.emit(this.form.value);
  }
}
