import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContantInfoComponent } from './contant-info.component';

describe('ContantInfoComponent', () => {
  let component: ContantInfoComponent;
  let fixture: ComponentFixture<ContantInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContantInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContantInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
