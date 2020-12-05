import { Component } from '@angular/core';
import { NewsletterService } from '../../../../core/services/newsletter/newsletter.service';
import { NewsletterCredentials } from '../../../shared/models/NewsletterCredentials';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AutoUnsubscribe } from '../../../../core/classes/AutoUnsubscribe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends AutoUnsubscribe {
  form: FormGroup;

  showSuccessfullySubscribed = false;

  constructor(private newsletterService: NewsletterService) {
    super();
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  submitNewsletterData(data: NewsletterCredentials) {
    if (this.form.valid) {
      this.autoUnsubscribe(
        this.newsletterService.subscribeToNewsletter(data).subscribe(() => {
          this.showSuccessfullySubscribed = true;
        })
      );
    }
  }
}
