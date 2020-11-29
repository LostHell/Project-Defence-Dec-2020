import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-base-input-textarea',
  templateUrl: './base-input-textarea.component.html',
  styleUrls: ['./base-input-textarea.component.scss'],
})
export class BaseInputTextareaComponent {
  @Input() form: FormGroup;
  @Input() label: string;
  @Input() name: string;

  constructor() {}
}
