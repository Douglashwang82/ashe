import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatesSheetComponent } from './dates-sheet.component';

describe('DatesSheetComponent', () => {
  let component: DatesSheetComponent;
  let fixture: ComponentFixture<DatesSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatesSheetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatesSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
