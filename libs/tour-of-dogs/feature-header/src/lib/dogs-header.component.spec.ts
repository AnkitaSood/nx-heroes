import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogsHeaderComponent } from './dogs-header.component';

describe('DogsHeaderComponent', () => {
  let component: DogsHeaderComponent;
  let fixture: ComponentFixture<DogsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
