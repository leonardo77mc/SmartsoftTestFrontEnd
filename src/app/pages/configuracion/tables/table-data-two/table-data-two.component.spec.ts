import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDataTwoComponent } from './table-data-two.component';

describe('TableDataTwoComponent', () => {
  let component: TableDataTwoComponent;
  let fixture: ComponentFixture<TableDataTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableDataTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDataTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
