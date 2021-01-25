import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortDestinationTableComponent } from './sort-destination-table.component';

describe('SortDestinationTableComponent', () => {
  let component: SortDestinationTableComponent;
  let fixture: ComponentFixture<SortDestinationTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortDestinationTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortDestinationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
