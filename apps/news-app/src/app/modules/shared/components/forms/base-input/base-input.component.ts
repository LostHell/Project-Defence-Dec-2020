import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-base-input',
  templateUrl: './base-input.component.html',
  styleUrls: ['./base-input.component.scss'],
})
export class BaseInputComponent {
  @Input() form: FormGroup;
  @Input() label: string;
  @Input() name: string;
  @Input() placeholder: string;

  constructor() {}
}
