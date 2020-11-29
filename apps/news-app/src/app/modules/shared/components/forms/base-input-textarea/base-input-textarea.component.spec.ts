import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseInputTextareaComponent } from './base-input-textarea.component';

describe('BaseInputTextareaComponent', () => {
  let component: BaseInputTextareaComponent;
  let fixture: ComponentFixture<BaseInputTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseInputTextareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseInputTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
