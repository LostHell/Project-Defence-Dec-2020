import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-input',
  templateUrl: './reactive-input.component.html',
  styleUrls: ['./reactive-input.component.scss'],
})
export class ReactiveInputComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() formControlName: string;
  @Input() label: string;
  @Input() type: 'text' | 'email' | 'password' | 'number' = 'text';
  @Input() error: string;

  constructor() {}

  ngOnInit(): void {
    // this.form = new FormGroup({
    //   [this.formControlName]: new FormControl('', [Validators.required]),
    // });
  }
}
