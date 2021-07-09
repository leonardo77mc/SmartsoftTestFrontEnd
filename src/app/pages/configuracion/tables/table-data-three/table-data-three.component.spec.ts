import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDataThreeComponent } from './table-data-three.component';

describe('TableDataThreeComponent', () => {
  let component: TableDataThreeComponent;
  let fixture: ComponentFixture<TableDataThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableDataThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDataThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
