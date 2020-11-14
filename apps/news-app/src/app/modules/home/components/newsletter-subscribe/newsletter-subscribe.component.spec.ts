import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterSubcribeComponent } from './newsletter-subscribe.component';

describe('NewsletterSubcribeComponent', () => {
  let component: NewsletterSubcribeComponent;
  let fixture: ComponentFixture<NewsletterSubcribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsletterSubcribeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterSubcribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
