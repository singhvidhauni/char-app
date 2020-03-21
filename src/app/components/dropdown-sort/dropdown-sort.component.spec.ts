import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownSortComponent } from './dropdown-sort.component';

describe('DropdownSortComponent', () => {
  let component: DropdownSortComponent;
  let fixture: ComponentFixture<DropdownSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
