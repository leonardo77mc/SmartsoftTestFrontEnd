import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDataOneComponent } from './table-data-one.component';

describe('TableDataOneComponent', () => {
  let component: TableDataOneComponent;
  let fixture: ComponentFixture<TableDataOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableDataOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDataOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
