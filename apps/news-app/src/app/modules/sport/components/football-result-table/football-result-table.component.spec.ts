import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballResultTableComponent } from './football-result-table.component';

describe('FootballResultTableComponent', () => {
  let component: FootballResultTableComponent;
  let fixture: ComponentFixture<FootballResultTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballResultTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballResultTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
